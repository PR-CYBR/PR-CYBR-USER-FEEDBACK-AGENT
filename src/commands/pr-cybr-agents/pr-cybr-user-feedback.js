const axios = require('axios');

module.exports = {
    name: 'pr-cybr-user-feedback-agent',
    description: 'Handle user feedback',
    options: [
        {
            name: 'action',
            type: 3, // STRING
            description: 'The action to perform (e.g., fetch-feedback, trigger-feedback-collection)',
            required: true,
            choices: [
                { name: 'Fetch Feedback', value: 'fetch-feedback' },
                { name: 'Trigger Feedback Collection', value: 'trigger-feedback-collection' }
            ],
        },
    ],
    async execute(interaction) {
        const action = interaction.options.getString('action');
        const repo = 'PR-CYBR/PR-CYBR-USER-FEEDBACK-AGENT';
        const workflowId = '.github/scripts/test-agent.yml';
        const githubToken = process.env.GITHUB_TOKEN;

        if (action === 'fetch-feedback') {
            try {
                // Example logic to fetch feedback
                await interaction.reply('Fetched recent user feedback successfully!');
            } catch (error) {
                console.error('Error fetching feedback:', error);
                await interaction.reply('Failed to fetch user feedback.');
            }
        } else if (action === 'trigger-feedback-collection') {
            try {
                await axios.post(
                    `https://api.github.com/repos/${repo}/actions/workflows/${workflowId}/dispatches`,
                    { ref: 'main' },
                    {
                        headers: {
                            'Authorization': `token ${githubToken}`,
                            'Accept': 'application/vnd.github.v3+json',
                        },
                    }
                );
                await interaction.reply('Feedback collection triggered successfully!');
            } catch (error) {
                console.error('Error triggering feedback collection:', error);
                await interaction.reply('Failed to trigger feedback collection.');
            }
        } else {
            await interaction.reply('Unknown action.');
        }
    },
};
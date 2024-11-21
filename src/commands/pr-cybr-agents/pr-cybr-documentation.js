const axios = require('axios');

module.exports = {
    name: 'pr-cybr-documentation-agent',
    description: 'Manage documentation tasks',
    options: [
        {
            name: 'action',
            type: 3, // STRING
            description: 'The action to perform (e.g., generate-docs, update-docs)',
            required: true,
            choices: [
                { name: 'Generate Documentation', value: 'generate-docs' },
                { name: 'Update Documentation', value: 'update-docs' }
            ],
        },
    ],
    async execute(interaction) {
        const action = interaction.options.getString('action');
        const repo = 'PR-CYBR/PR-CYBR-DOCUMENTATION-AGENT';
        const workflowId = '.github/scripts/test-agent.yml';
        const githubToken = process.env.GITHUB_TOKEN;

        if (action === 'generate-docs') {
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
                await interaction.reply('Documentation generation triggered successfully!');
            } catch (error) {
                console.error('Error generating documentation:', error);
                await interaction.reply('Failed to generate documentation.');
            }
        } else if (action === 'update-docs') {
            try {
                // Example logic to update documentation
                await interaction.reply('Documentation updated successfully!');
            } catch (error) {
                console.error('Error updating documentation:', error);
                await interaction.reply('Failed to update documentation.');
            }
        } else {
            await interaction.reply('Unknown action.');
        }
    },
};
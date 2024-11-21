const axios = require('axios');

module.exports = {
    name: 'pr-cybr-data-integration-agent',
    description: 'Handle data integration tasks',
    options: [
        {
            name: 'action',
            type: 3, // STRING
            description: 'The action to perform (e.g., trigger-integration, check-status)',
            required: true,
            choices: [
                { name: 'Trigger Integration', value: 'trigger-integration' },
                { name: 'Check Integration Status', value: 'check-status' }
            ],
        },
    ],
    async execute(interaction) {
        const action = interaction.options.getString('action');
        const repo = 'PR-CYBR/PR-CYBR-DATA-INTEGRATION-AGENT';
        const workflowId = '.github/scripts/test-agent.yml';
        const githubToken = process.env.GITHUB_TOKEN;

        if (action === 'trigger-integration') {
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
                await interaction.reply('Data integration triggered successfully!');
            } catch (error) {
                console.error('Error triggering integration:', error);
                await interaction.reply('Failed to trigger the data integration.');
            }
        } else if (action === 'check-status') {
            try {
                const response = await axios.get(
                    `https://api.github.com/repos/${repo}/actions/runs`,
                    {
                        headers: {
                            'Authorization': `token ${githubToken}`,
                            'Accept': 'application/vnd.github.v3+json',
                        },
                    }
                );
                const latestRun = response.data.workflow_runs[0];
                await interaction.reply(`Latest integration run status: ${latestRun.status}`);
            } catch (error) {
                console.error('Error fetching integration status:', error);
                await interaction.reply('Failed to fetch the integration status.');
            }
        } else {
            await interaction.reply('Unknown action.');
        }
    },
};
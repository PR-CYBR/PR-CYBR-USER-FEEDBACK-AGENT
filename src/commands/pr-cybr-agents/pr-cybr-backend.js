const axios = require('axios');

module.exports = {
    name: 'pr-cybr-backend-agent',
    description: 'Manage backend tasks',
    options: [
        {
            name: 'action',
            type: 3, // STRING
            description: 'The action to perform (e.g., deploy, check-deployment-status)',
            required: true,
            choices: [
                { name: 'Deploy', value: 'deploy' },
                { name: 'Check Deployment Status', value: 'check-deployment-status' }
            ],
        },
    ],
    async execute(interaction) {
        const action = interaction.options.getString('action');
        const repo = 'PR-CYBR/PR-CYBR-BACKEND-AGENT';
        const workflowId = '.github/scripts/test-agent.yml';
        const githubToken = process.env.GITHUB_TOKEN;

        if (action === 'deploy') {
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
                await interaction.reply('Backend deployment triggered successfully!');
            } catch (error) {
                console.error('Error triggering deployment:', error);
                await interaction.reply('Failed to trigger the backend deployment.');
            }
        } else if (action === 'check-deployment-status') {
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
                await interaction.reply(`Latest deployment run status: ${latestRun.status}`);
            } catch (error) {
                console.error('Error fetching deployment status:', error);
                await interaction.reply('Failed to fetch the deployment status.');
            }
        } else {
            await interaction.reply('Unknown action.');
        }
    },
};
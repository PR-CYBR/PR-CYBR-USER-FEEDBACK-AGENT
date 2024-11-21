const axios = require('axios');

module.exports = {
    name: 'pr-cybr-infrastructure-agent',
    description: 'Manage infrastructure tasks',
    options: [
        {
            name: 'action',
            type: 3, // STRING
            description: 'The action to perform (e.g., deploy-infrastructure, check-infrastructure-status)',
            required: true,
            choices: [
                { name: 'Deploy Infrastructure', value: 'deploy-infrastructure' },
                { name: 'Check Infrastructure Status', value: 'check-infrastructure-status' }
            ],
        },
    ],
    async execute(interaction) {
        const action = interaction.options.getString('action');
        const repo = 'PR-CYBR/PR-CYBR-INFRASTRUCTURE-AGENT';
        const workflowId = '.github/scripts/test-agent.yml';
        const githubToken = process.env.GITHUB_TOKEN;

        if (action === 'deploy-infrastructure') {
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
                await interaction.reply('Infrastructure deployment triggered successfully!');
            } catch (error) {
                console.error('Error deploying infrastructure:', error);
                await interaction.reply('Failed to deploy infrastructure.');
            }
        } else if (action === 'check-infrastructure-status') {
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
                await interaction.reply(`Latest infrastructure status: ${latestRun.status}`);
            } catch (error) {
                console.error('Error fetching infrastructure status:', error);
                await interaction.reply('Failed to fetch the infrastructure status.');
            }
        } else {
            await interaction.reply('Unknown action.');
        }
    },
};
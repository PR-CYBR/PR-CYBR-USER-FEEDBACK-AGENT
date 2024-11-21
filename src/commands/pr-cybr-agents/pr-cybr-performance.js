const axios = require('axios');

module.exports = {
    name: 'pr-cybr-performance-agent',
    description: 'Run performance tests or fetch metrics',
    options: [
        {
            name: 'action',
            type: 3, // STRING
            description: 'The action to perform (e.g., run-tests, fetch-metrics)',
            required: true,
            choices: [
                { name: 'Run Performance Tests', value: 'run-tests' },
                { name: 'Fetch Performance Metrics', value: 'fetch-metrics' }
            ],
        },
    ],
    async execute(interaction) {
        const action = interaction.options.getString('action');
        const repo = 'PR-CYBR/PR-CYBR-PERFORMANCE-AGENT';
        const workflowId = '.github/scripts/test-agent.yml';
        const githubToken = process.env.GITHUB_TOKEN;

        if (action === 'run-tests') {
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
                await interaction.reply('Performance tests triggered successfully!');
            } catch (error) {
                console.error('Error triggering performance tests:', error);
                await interaction.reply('Failed to trigger the performance tests.');
            }
        } else if (action === 'fetch-metrics') {
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
                await interaction.reply(`Latest performance metrics: ${latestRun.status}`);
            } catch (error) {
                console.error('Error fetching performance metrics:', error);
                await interaction.reply('Failed to fetch the performance metrics.');
            }
        } else {
            await interaction.reply('Unknown action.');
        }
    },
};
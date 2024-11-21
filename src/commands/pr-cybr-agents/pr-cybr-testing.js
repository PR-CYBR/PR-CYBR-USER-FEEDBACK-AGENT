const axios = require('axios');

module.exports = {
    name: 'pr-cybr-testing-agent',
    description: 'Run test suites or check test results',
    options: [
        {
            name: 'action',
            type: 3, // STRING
            description: 'The action to perform (e.g., run-tests, check-test-results)',
            required: true,
            choices: [
                { name: 'Run Test Suites', value: 'run-tests' },
                { name: 'Check Test Results', value: 'check-test-results' }
            ],
        },
    ],
    async execute(interaction) {
        const action = interaction.options.getString('action');
        const repo = 'PR-CYBR/PR-CYBR-TESTING-AGENT';
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
                await interaction.reply('Test suites triggered successfully!');
            } catch (error) {
                console.error('Error triggering test suites:', error);
                await interaction.reply('Failed to trigger the test suites.');
            }
        } else if (action === 'check-test-results') {
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
                await interaction.reply(`Latest test results: ${latestRun.status}`);
            } catch (error) {
                console.error('Error fetching test results:', error);
                await interaction.reply('Failed to fetch the test results.');
            }
        } else {
            await interaction.reply('Unknown action.');
        }
    },
};
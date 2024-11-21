const axios = require('axios');

module.exports = {
    name: 'pr-cybr-security-agent',
    description: 'Run security scans or check scan status',
    options: [
        {
            name: 'action',
            type: 3, // STRING
            description: 'The action to perform (e.g., run-scan, check-scan-status)',
            required: true,
            choices: [
                { name: 'Run Security Scan', value: 'run-scan' },
                { name: 'Check Scan Status', value: 'check-scan-status' }
            ],
        },
    ],
    async execute(interaction) {
        const action = interaction.options.getString('action');
        const repo = 'PR-CYBR/PR-CYBR-SECURITY-AGENT';
        const workflowId = '.github/scripts/test-agent.yml';
        const githubToken = process.env.GITHUB_TOKEN;

        if (action === 'run-scan') {
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
                await interaction.reply('Security scan triggered successfully!');
            } catch (error) {
                console.error('Error triggering security scan:', error);
                await interaction.reply('Failed to trigger the security scan.');
            }
        } else if (action === 'check-scan-status') {
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
                await interaction.reply(`Latest security scan status: ${latestRun.status}`);
            } catch (error) {
                console.error('Error fetching scan status:', error);
                await interaction.reply('Failed to fetch the scan status.');
            }
        } else {
            await interaction.reply('Unknown action.');
        }
    },
};
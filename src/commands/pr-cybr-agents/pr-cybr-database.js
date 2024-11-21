const axios = require('axios');

module.exports = {
    name: 'pr-cybr-database-agent',
    description: 'Perform database operations',
    options: [
        {
            name: 'action',
            type: 3, // STRING
            description: 'The action to perform (e.g., trigger-backup, check-backup-status)',
            required: true,
            choices: [
                { name: 'Trigger Backup', value: 'trigger-backup' },
                { name: 'Check Backup Status', value: 'check-backup-status' }
            ],
        },
    ],
    async execute(interaction) {
        const action = interaction.options.getString('action');
        const repo = 'PR-CYBR/PR-CYBR-DATABASE-AGENT';
        const workflowId = '.github/scripts/test-agent.yml';
        const githubToken = process.env.GITHUB_TOKEN;

        if (action === 'trigger-backup') {
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
                await interaction.reply('Database backup triggered successfully!');
            } catch (error) {
                console.error('Error triggering backup:', error);
                await interaction.reply('Failed to trigger the database backup.');
            }
        } else if (action === 'check-backup-status') {
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
                await interaction.reply(`Latest backup run status: ${latestRun.status}`);
            } catch (error) {
                console.error('Error fetching backup status:', error);
                await interaction.reply('Failed to fetch the backup status.');
            }
        } else {
            await interaction.reply('Unknown action.');
        }
    },
};
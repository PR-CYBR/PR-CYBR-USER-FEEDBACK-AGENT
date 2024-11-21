const axios = require('axios');

module.exports = {
    name: 'pr-cybr-mgmt-agent',
    description: 'Manage PR-CYBR management tasks',
    options: [
        {
            name: 'action',
            type: 3, // STRING
            description: 'The action to perform (e.g., trigger-workflow, check-status)',
            required: true,
            choices: [
                { name: 'Trigger Workflow', value: 'trigger-workflow' },
                { name: 'Check Workflow Status', value: 'check-status' }
            ],
        },
    ],
    async execute(interaction) {
        const action = interaction.options.getString('action');
        const repo = 'PR-CYBR/PR-CYBR-MGMT-AGENT';
        const workflowId = '.github/scripts/test-agent.yml';
        const githubToken = process.env.GITHUB_TOKEN;

        if (action === 'trigger-workflow') {
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
                await interaction.reply('Workflow triggered successfully!');
            } catch (error) {
                console.error('Error triggering workflow:', error);
                await interaction.reply('Failed to trigger the workflow.');
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
                await interaction.reply(`Latest workflow run status: ${latestRun.status}`);
            } catch (error) {
                console.error('Error fetching workflow status:', error);
                await interaction.reply('Failed to fetch the workflow status.');
            }
        } else {
            await interaction.reply('Unknown action.');
        }
    },
};
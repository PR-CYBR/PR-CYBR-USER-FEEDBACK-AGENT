const axios = require('axios');

module.exports = {
    name: 'pr-cybr-ci-cd-agent',
    description: 'Manage CI/CD pipelines',
    options: [
        {
            name: 'action',
            type: 3, // STRING
            description: 'The action to perform (e.g., trigger-pipeline, check-pipeline-status)',
            required: true,
            choices: [
                { name: 'Trigger Pipeline', value: 'trigger-pipeline' },
                { name: 'Check Pipeline Status', value: 'check-pipeline-status' }
            ],
        },
    ],
    async execute(interaction) {
        const action = interaction.options.getString('action');
        const repo = 'PR-CYBR/PR-CYBR-CI-CD-AGENT';
        const workflowId = '.github/scripts/test-agent.yml';
        const githubToken = process.env.GITHUB_TOKEN;

        if (action === 'trigger-pipeline') {
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
                await interaction.reply('CI/CD pipeline triggered successfully!');
            } catch (error) {
                console.error('Error triggering pipeline:', error);
                await interaction.reply('Failed to trigger the CI/CD pipeline.');
            }
        } else if (action === 'check-pipeline-status') {
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
                await interaction.reply(`Latest pipeline run status: ${latestRun.status}`);
            } catch (error) {
                console.error('Error fetching pipeline status:', error);
                await interaction.reply('Failed to fetch the pipeline status.');
            }
        } else {
            await interaction.reply('Unknown action.');
        }
    },
};
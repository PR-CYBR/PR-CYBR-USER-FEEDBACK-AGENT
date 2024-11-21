module.exports = {
    name: 'pr-cybr-mgmt-agent',
    description: 'Manage PR-CYBR management tasks',
    options: [
        {
            name: 'action',
            type: 3, // STRING
            description: 'The action to perform (e.g., run-test)',
            required: true,
            choices: [
                { name: 'Run Test Agent', value: 'run-test' }
            ],
        },
    ],
    async execute(interaction) {
        const action = interaction.options.getString('action');

        if (action === 'run-test') {
            // Logic to trigger the test-agent.yml workflow
            await interaction.reply('Test agent workflow triggered successfully!');
        } else {
            await interaction.reply('Unknown action.');
        }
    },
};
module.exports = {
    name: 'ping',
    description: 'Check bot responsiveness',
    async execute(interaction) {
        await interaction.reply('Pong! Bot is operational.');
    },
};
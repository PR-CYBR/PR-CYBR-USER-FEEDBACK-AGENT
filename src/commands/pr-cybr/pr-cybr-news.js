module.exports = {
    name: 'pr-cybr-news',
    description: 'Fetch and log messages from the #pr-cybr-news channel',
    async execute(interaction) {
        const channelName = 'pr-cybr-news';
        const channel = interaction.guild.channels.cache.find(ch => ch.name === channelName && ch.type === 'GUILD_TEXT');

        if (!channel) {
            return interaction.reply(`Channel #${channelName} not found.`);
        }

        try {
            const messages = await channel.messages.fetch({ limit: 10 }); // Fetch the last 10 messages
            const messageLog = messages.map(msg => `${msg.author.username}: ${msg.content}`).join('\n');
            console.log(`Messages from #${channelName}:\n${messageLog}`);
            await interaction.reply(`Logged the latest messages from #${channelName}. Check the console for details.`);
        } catch (error) {
            console.error('Error fetching messages:', error);
            await interaction.reply('Failed to fetch messages from the channel.');
        }
    },
};
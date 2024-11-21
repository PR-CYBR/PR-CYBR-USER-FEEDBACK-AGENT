const mongoose = require('mongoose');
const UserExecution = require('../../models/UserExecution');

module.exports = {
    name: 'byte-shop',
    description: 'Interact with the Echo bot using the /daily command every 20 hours',
    async execute(interaction) {
        const echoBotChannelName = 'echo-bot'; // Replace with the actual channel name where the Echo bot listens
        const channel = interaction.guild.channels.cache.find(ch => ch.name === echoBotChannelName && ch.type === 'GUILD_TEXT');

        if (!channel) {
            return interaction.reply(`Channel #${echoBotChannelName} not found.`);
        }

        const userId = interaction.user.id;
        const now = new Date();
        const twentyHours = 20 * 60 * 60 * 1000; // 20 hours in milliseconds

        try {
            // Check the last execution time from the database
            let userExecution = await UserExecution.findOne({ userId });

            if (userExecution) {
                const timeSinceLastExecution = now - userExecution.lastExecution;

                if (timeSinceLastExecution < twentyHours) {
                    const timeLeft = twentyHours - timeSinceLastExecution;
                    const hoursLeft = Math.floor(timeLeft / (60 * 60 * 1000));
                    const minutesLeft = Math.floor((timeLeft % (60 * 60 * 1000)) / (60 * 1000));
                    return interaction.reply(`You can use the /daily command again in ${hoursLeft} hours and ${minutesLeft} minutes.`);
                }
            }

            // Send the /daily command to the Echo bot
            const sentMessage = await channel.send('/daily');
            const filter = response => response.author.bot && response.author.username === 'Echo'; // Use 'Echo' as the bot's username
            const collected = await channel.awaitMessages({ filter, max: 1, time: 10000, errors: ['time'] });

            const echoResponse = collected.first();
            await interaction.reply(`Echo bot responded: ${echoResponse.content}`);

            // Update or create the last execution time for the user
            if (userExecution) {
                userExecution.lastExecution = now;
                await userExecution.save();
            } else {
                await UserExecution.create({ userId, lastExecution: now });
            }
        } catch (error) {
            console.error('Error interacting with Echo bot or database:', error);
            await interaction.reply('Failed to interact with the Echo bot.');
        }
    },
};
module.exports = {
    name: 'ready',
    once: true,
    execute(client) {
        console.log(`${client.user.tag} is online and ready!`);
        client.user.setActivity('commands', { type: 'LISTENING' });
    },
};
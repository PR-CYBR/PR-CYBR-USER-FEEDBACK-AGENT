require('dotenv').config(); // Load environment variables

const { Client, GatewayIntentBits, REST, Routes } = require('discord.js');

// Discord Bot Configuration using environment variables
const BOT_TOKEN = process.env.BOT_TOKEN;
const CLIENT_ID = process.env.CLIENT_ID;
const GUILD_ID = process.env.GUILD_ID;

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// Temporary in-memory database for registered nodes
const nodes = {};

// Slash Commands Setup
const commands = [
    {
        name: 'register-node',
        description: 'Register a new node',
        options: [
            {
                name: 'name',
                type: 3, // STRING
                description: 'The name of the node',
                required: true,
            },
            {
                name: 'type',
                type: 3, // STRING
                description: 'The type of node (e.g., server, client)',
                required: true,
            },
        ],
    },
    {
        name: 'node-status',
        description: 'Check the status of a registered node',
        options: [
            {
                name: 'name',
                type: 3, // STRING
                description: 'The name of the node to check',
                required: true,
            },
        ],
    },
    {
        name: 'ping',
        description: 'Check bot responsiveness',
    },
    {
        name: 'list-nodes',
        description: 'List all registered nodes',
    },
];

// Register Commands with Discord
const rest = new REST({ version: '10' }).setToken(BOT_TOKEN);
(async () => {
    try {
        console.log('Registering slash commands...');
        await rest.put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), {
            body: commands,
        });
        console.log('Slash commands registered successfully!');
    } catch (error) {
        console.error('Error registering commands:', error);
    }
})();

// Event: Bot is ready
client.once('ready', () => {
    console.log('PR-CYBR-INFRA is online and ready!');
});

// Event: Interaction created
client.on('interactionCreate', async (interaction) => {
    if (!interaction.isCommand()) return;

    const { commandName, options } = interaction;

    try {
        if (commandName === 'register-node') {
            const nodeName = options.getString('name');
            const nodeType = options.getString('type');

            // Save node information
            nodes[nodeName] = { type: nodeType, status: 'Healthy' };
            await interaction.reply(`Node "${nodeName}" of type "${nodeType}" registered successfully!`);

        } else if (commandName === 'node-status') {
            const nodeName = options.getString('name');

            // Check node status
            if (nodes[nodeName]) {
                const status = nodes[nodeName].status;
                await interaction.reply(`Node "${nodeName}" is currently "${status}".`);
            } else {
                await interaction.reply(`Node "${nodeName}" is not registered.`);
            }

        } else if (commandName === 'list-nodes') {
            if (Object.keys(nodes).length > 0) {
                const nodeList = Object.entries(nodes)
                    .map(([name, info]) => `• ${name} (${info.type}): ${info.status}`)
                    .join('\n');
                await interaction.reply(`Registered nodes:\n${nodeList}`);
            } else {
                await interaction.reply('No nodes are registered yet.');
            }

        } else if (commandName === 'ping') {
            await interaction.reply('Pong! Bot is operational.');

        } else {
            await interaction.reply('Unknown command. Please try again.');
        }
    } catch (error) {
        console.error('Error handling interaction:', error);
        await interaction.reply('An error occurred while processing your command.');
    }
});

// Login to Discord with your app's token
client.login(BOT_TOKEN);
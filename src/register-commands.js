require('dotenv').config(); // Load environment variables

const { REST, Routes } = require('discord.js');

// Discord Bot Configuration using environment variables
const BOT_TOKEN = process.env.BOT_TOKEN;
const CLIENT_ID = process.env.CLIENT_ID;
const GUILD_ID = process.env.GUILD_ID;

// Define the commands for each agent
const commands = [
    {
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
    },
    {
        name: 'pr-cybr-data-integration-agent',
        description: 'Handle data integration tasks',
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
    },
    {
        name: 'pr-cybr-database-agent',
        description: 'Perform database operations',
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
    },
    {
        name: 'pr-cybr-frontend-agent',
        description: 'Manage frontend tasks',
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
    },
    {
        name: 'pr-cybr-backend-agent',
        description: 'Manage backend tasks',
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
    },
    {
        name: 'pr-cybr-performance-agent',
        description: 'Check performance metrics',
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
    },
    {
        name: 'pr-cybr-security-agent',
        description: 'Perform security checks',
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
    },
    {
        name: 'pr-cybr-testing-agent',
        description: 'Run tests',
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
    },
    {
        name: 'pr-cybr-ci-cd-agent',
        description: 'Manage CI/CD pipelines',
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
    },
    {
        name: 'pr-cybr-user-feedback-agent',
        description: 'Handle user feedback',
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
    },
    {
        name: 'pr-cybr-documentation-agent',
        description: 'Manage documentation tasks',
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
    },
    {
        name: 'pr-cybr-infrastructure-agent',
        description: 'Manage infrastructure tasks',
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
    },
];

// Register the commands with Discord
const rest = new REST({ version: '10' }).setToken(BOT_TOKEN);

(async () => {
    try {
        console.log('Started refreshing application (/) commands.');

        await rest.put(
            Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID),
            { body: commands },
        );

        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error('Error registering commands:', error);
    }
})();
require('dotenv').config(); // Load environment variables

const { Client, GatewayIntentBits, Collection } = require('discord.js');
const { Sequelize } = require('sequelize');
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

// Discord Bot Configuration using environment variables
const BOT_TOKEN = process.env.BOT_TOKEN;
const DATABASE_URL = process.env.DATABASE_URL; // PostgreSQL connection string
const MONGODB_URI = process.env.MONGODB_URI; // MongoDB connection string

// Initialize Discord client
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// Set up command collection
client.commands = new Collection();

// Define the base directory for resolving paths
const baseDir = path.resolve(__dirname, '..');

// Load command files
const commandsPath = path.join(baseDir, 'src', 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    client.commands.set(command.name, command);
}

// Load event files
const eventsPath = path.join(baseDir, 'src', 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
    const filePath = path.join(eventsPath, file);
    const event = require(filePath);
    if (event.once) {
        client.once(event.name, (...args) => event.execute(...args, client));
    } else {
        client.on(event.name, (...args) => event.execute(...args, client));
    }
}

// Connect to PostgreSQL database
const sequelize = new Sequelize(DATABASE_URL, {
    dialect: 'postgres',
    logging: false,
});

sequelize.authenticate()
    .then(() => console.log('Connected to PostgreSQL database.'))
    .catch(err => console.error('Unable to connect to the PostgreSQL database:', err));

// Connect to MongoDB
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Failed to connect to MongoDB:', err);
});

// Login to Discord with your app's token
client.login(BOT_TOKEN)
    .then(() => console.log('Logged in to Discord successfully.'))
    .catch(err => console.error('Failed to log in to Discord:', err));
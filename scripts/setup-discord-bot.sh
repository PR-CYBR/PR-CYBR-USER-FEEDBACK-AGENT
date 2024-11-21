#!/bin/bash

# Check if Docker is installed
if ! command -v docker &> /dev/null
then
    echo "Docker is not installed. Please install Docker and try again."
    exit 1
fi

# Check if Docker Compose is installed
if ! command -v docker-compose &> /dev/null
then
    echo "Docker Compose is not installed. Please install Docker Compose and try again."
    exit 1
fi

# Build the Docker image
echo "Building the Docker image..."
docker-compose build

# Check if .env file exists, if not, create it from .env.example
if [ ! -f .env ]; then
    echo "Creating .env file from .env.example..."
    cp .env.example .env

    # Prompt user for environment variables
    echo "Please enter your Discord bot credentials and other necessary information."
    read -p "Enter your Discord Bot Token: " BOT_TOKEN
    read -p "Enter your Discord Client ID: " CLIENT_ID
    read -p "Enter your GitHub Token: " GITHUB_TOKEN
    read -p "Enter your MongoDB URI (e.g., mongodb://root:example@mongodb:27017/yourdb): " MONGODB_URI

    # Write the environment variables to the .env file
    echo "BOT_TOKEN=$BOT_TOKEN" >> .env
    echo "CLIENT_ID=$CLIENT_ID" >> .env
    echo "GITHUB_TOKEN=$GITHUB_TOKEN" >> .env
    echo "MONGODB_URI=$MONGODB_URI" >> .env

    echo ".env file created successfully with your credentials."
else
    echo ".env file already exists. Please ensure it contains the correct credentials."
fi

# Start the Docker containers
echo "Starting the Docker containers..."
docker-compose up -d

# Get the container ID of the running bot
CONTAINER_ID=$(docker ps -qf "name=discord-bot")

# Check if the container is running
if [ -n "$CONTAINER_ID" ]; then
    echo "Container started successfully. You can now interact with your bot."
else
    echo "Failed to start the container. Please check the logs for more details."
fi

# Get Status of Docker Containers
echo "Checking the status of Docker containers..."
docker ps --filter "name=discord-bot" --filter "name=mongodb"

# Create a log file for both containers (discord-bot, and mongodb)
LOG_DIR="./logs"
mkdir -p $LOG_DIR
DISCORD_LOG="$LOG_DIR/discord-bot.log"
MONGODB_LOG="$LOG_DIR/mongodb.log"

# Output docker logs of containers to their respective log file
echo "Saving logs to $DISCORD_LOG and $MONGODB_LOG..."
docker logs discord-bot > $DISCORD_LOG 2>&1
docker logs mongodb > $MONGODB_LOG 2>&1

# Test Container Interactivity (docker exec)
echo "Testing container interactivity..."
if docker exec discord-bot echo "Container is interactive"; then
    echo "Container is interactive. Here are some useful commands:"
    echo "To exec into the container: docker exec -it discord-bot /bin/bash"
    echo "To run the Discord bot inside the container: npm start"
    echo "To view the Discord bot console log: tail -f $DISCORD_LOG"
    echo "To test bot can send message to Discord channel: Use the bot's command in Discord"
else
    echo "Failed to exec into the container. Attempting to resolve issues by rebuilding containers..."
    # Download and run the build-containers.sh script to rebuild and resolve issues
    BUILD_SCRIPT_URL="https://raw.githubusercontent.com/PR-CYBR/PR-CYBR-INFRASTRUCTURE-AGENT/main/scripts/build-containers.sh"
    TEMP_SCRIPT="./temp-build-containers.sh"

    echo "Downloading build-containers.sh from $BUILD_SCRIPT_URL..."
    if curl -o "$TEMP_SCRIPT" -fsSL "$BUILD_SCRIPT_URL"; then
        bash "$TEMP_SCRIPT"
        rm "$TEMP_SCRIPT"  # Clean up the temporary script file
    else
        echo "Failed to download build-containers.sh. Please check the URL or your internet connection."
    fi
fi
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
    read -p "Enter your Database URL (PostgreSQL): " DATABASE_URL
    read -p "Enter your MongoDB URI: " MONGODB_URI

    # Write the environment variables to the .env file
    echo "BOT_TOKEN=$BOT_TOKEN" >> .env
    echo "CLIENT_ID=$CLIENT_ID" >> .env
    echo "GITHUB_TOKEN=$GITHUB_TOKEN" >> .env
    echo "DATABASE_URL=$DATABASE_URL" >> .env
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
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
    echo "Please update the .env file with your Discord bot credentials."
else
    echo ".env file already exists. Please ensure it contains the correct credentials."
fi

# Start the Docker container
echo "Starting the Docker container..."
docker-compose up -d

# Get the container ID of the running bot
CONTAINER_ID=$(docker ps -qf "name=discord-bot")

# Check if the container is running
if [ -n "$CONTAINER_ID" ]; then
    echo "Container started successfully. Executing into the container..."
    docker exec -it $CONTAINER_ID /bin/sh
else
    echo "Failed to start the container. Please check the logs for more details."
fi
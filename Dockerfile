# Use the official Node.js 16 image as a base
FROM node:16 as builder

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Use a lightweight Nginx image
FROM nginx:alpine

# Copy built application from the builder stage
COPY --from=builder /usr/src/app /usr/share/nginx/html

# Copy Nginx configuration file
COPY config/nginx.conf /etc/nginx/nginx.conf

# Expose the port Nginx will run on
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
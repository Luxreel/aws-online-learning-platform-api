# Use the Node.js image as base
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all app files to the working directory
COPY . .

# Expose the port your app runs on
EXPOSE 3001

# Command to start the app
CMD ["node", "app.js"]
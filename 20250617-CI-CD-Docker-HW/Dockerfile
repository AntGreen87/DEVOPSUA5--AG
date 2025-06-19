# Use the official Node.js image from Docker Hub
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy only the app file into the container
COPY 03-app.js .

# Tell Docker to listen on port 3000
EXPOSE 3000

# Command to run your app when the container starts
CMD ["node", "03-app.js"]

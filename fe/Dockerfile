# Use the official Node image as base image
FROM node:16

# Set working directory
WORKDIR /var/www/html/recruit/fe

# Copy package.json and package-lock.json
COPY package*.json /var/www/html/recruit/fe/

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . /var/www/html/recruit/fe/

# Expose port 3000
EXPOSE 3000

# Start the app
CMD ["npm", "start"]

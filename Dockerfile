FROM node:12.16.1-alpine3.11

LABEL maintainer "jhoijune"

# Copy source code
COPY . /app

# Change working directory
WORKDIR /app

# Install dependencies
RUN npm install --production && npm audit fix

# Expose API port to the outside
EXPOSE 80

# Launch application
ENTRYPOINT npm start

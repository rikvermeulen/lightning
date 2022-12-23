# Define OS
#
FROM alpine:3.15 AS build

# Install packages
RUN apk add --no-cache nodejs npm

# Create app directory
WORKDIR /app

# Bundle package.json and package-lock.json
COPY ./package.json ./package-lock.json ./

# Install dependencies
RUN npm ci && npm cache clean --force

# Bundle application source
COPY . .

# Create a production build
RUN npm run build

# Expose the app port
EXPOSE 3000

# Setup healthcheck
HEALTHCHECK --interval=10s --timeout=3s \
  CMD wget --no-verbose --tries=1 --spider http://localhost:3000/_health || exit 1

CMD [ "npm", "start" ]

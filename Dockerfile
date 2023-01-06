# Define OS
#
FROM alpine:3.15 AS deps

# Install packages
RUN apk add --no-cache nodejs npm

# Create app directory
WORKDIR /app

# Bundle package.json and package-lock.json
COPY ./package.json ./package-lock.json ./

# Install dependencies
RUN npm ci && npm cache clean --force


# Rebuild the source code only when needed

FROM alpine:3.15 AS build

# Install packages
RUN apk add --no-cache nodejs npm

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules

COPY . .

RUN npm run build

# Production image, copy all the files and run next
FROM alpine:3.15 AS runner

RUN apk add --no-cache nodejs npm

WORKDIR /app

# Set node env
ENV NODE_ENV=production
ENV CONFIG_DIR=/


COPY --from=build /app/public ./public
COPY --from=build /app/package.json ./package.json

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=build /app/.next/standalone ./
COPY --from=build /app/.next/static ./.next/static

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]

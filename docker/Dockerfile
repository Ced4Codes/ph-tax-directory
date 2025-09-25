# Use Alpine-based Node.js image for smaller footprint
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Create non-root user for security
RUN addgroup -g 1001 -S nodejs && \
    adduser -S reactuser -u 1001 -G nodejs

# Copy package files first for better Docker layer caching
COPY package*.json ./
COPY yarn.lock* ./

# Install dependencies
RUN apk add --no-cache libc6-compat curl && \
    npm ci --only=production=false --silent

# Copy source code
COPY . .

# Change ownership of the app directory to the non-root user
RUN chown -R reactuser:nodejs /app

# Switch to non-root user
USER reactuser

# Expose the port that Vite dev server runs on
EXPOSE 5173

# Health check to ensure the container is running properly
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:5173/ || exit 1

# Define the command to run the application in development mode
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
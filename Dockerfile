# Stage 1: Build the Docusaurus site
FROM node:18-alpine AS builder

# Install pnpm globally
RUN npm install -g pnpm

# Set working directory
WORKDIR /app

# Copy only package manager files
COPY pnpm-lock.yaml package.json ./

# Install dependencies (using frozen lockfile)
RUN pnpm install --frozen-lockfile

# Copy rest of the project
COPY . .

# Build the static site
RUN pnpm build

# Stage 2: Serve with nginx
FROM nginx:alpine

# Copy the built site
COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
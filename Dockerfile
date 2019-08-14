FROM node:10.16.2-alpine AS builder

# Create app directory
WORKDIR /build

# Install app dependencies
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .
ARG API_URL
RUN npm run build

FROM nginx:1.17.2-alpine

WORKDIR /app

COPY --from=builder /build/dist ./

COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
# Build enviroment
FROM node:12-alpine AS buildEnv
WORKDIR /app
COPY . .
RUN npm ci && npm run build

# Production enviroment
FROM nginx:alpine
EXPOSE 3000
COPY --from=buildEnv /app/build /usr/share/nginx/html

# Use official node image for build stage
FROM node:18 as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Production image to serve build
FROM node:18-alpine
WORKDIR /app
# install simple static server
RUN npm install -g serve
COPY --from=build /app/build ./build
EXPOSE 2025
CMD ["serve", "-s", "build", "-l", "2025"]

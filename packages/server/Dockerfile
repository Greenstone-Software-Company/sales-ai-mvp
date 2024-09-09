FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --if-present  # --if-present skips the build if not defined in the package.json scripts
EXPOSE 3000
CMD ["npm", "start"]

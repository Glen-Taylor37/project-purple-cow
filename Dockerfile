ARG port=3000
FROM node:15.2.1-alpine
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production && mv node_modules ../
COPY . .
EXPOSE $port
CMD ["npm", "start"]

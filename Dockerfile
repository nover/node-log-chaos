FROM node:6.9
RUN npm install -g yarn
WORKDIR /app
ADD ./ ./
RUN yarn

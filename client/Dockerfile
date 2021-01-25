FROM node:14.15.4-alpine3.10

# fixes create-react-app command bug in docker
# https://github.com/facebook/create-react-app/issues/8688
ENV CI=true

WORKDIR /app

COPY ./package.json ./

RUN npm install

COPY ./ ./

CMD ["npm", "start"]
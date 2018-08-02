FROM  node:9.2.0
WORKDIR /frontend

EXPOSE 3080
COPY package*.json ./
RUN yarn install --no-progress --ignore-optional

COPY . /frontend

ENV PORT 3080
CMD yarn start
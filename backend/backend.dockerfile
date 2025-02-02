FROM node:18

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .
RUN npx prisma generate 
RUN npm run build

EXPOSE 8000

CMD [ "npm", "run" , "start:prod" ]

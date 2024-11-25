FROM node:18.13
WORKDIR /app
RUN npm install -g @angular/cli@17
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
CMD ["ng", "serve", "--host", "0.0.0.0"]

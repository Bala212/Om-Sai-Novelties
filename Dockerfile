FROM node:24-alpine3.21

WORKDIR /home/app

# Copying everything before npm install means Docker will invalidate the cache every time you change any file (even just a small React component).
# That makes your builds slower.
COPY package*.json .

# npm install runs only when package files change.
# This way, if you change only your src/ code, Docker won’t re-run npm install, it will just reuse the cached layer.
RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
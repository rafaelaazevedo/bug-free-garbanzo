FROM cypress/base:6
USER root
WORKDIR /home/garbanzo/
COPY . /home/garbanzo/
RUN npm install
RUN npm run verify
RUN npm run e2e

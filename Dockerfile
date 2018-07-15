FROM cypress/browsers:chrome67-ff57
RUN useradd -ms /bin/bash garbanzo
USER garbanzo
WORKDIR /home/garbanzo/
COPY *.* /home/garbanzo/
RUN npm i
RUN firefox --version
RUN $(npm bin)/cypress verify
RUN npm run e2e
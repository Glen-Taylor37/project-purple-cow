#!/bin/bash

# PORT -- CONFIGURE HERE
PORT=3000

# set port env for Create React App development server
export PORT=$PORT

# execute via react scripts 
npm install --silent --production
npm start

# alternatively, uncomment below and use DockerFile

# docker build --build-arg port=$PORT -t project-purple-cow .
# docker run -it -p $PORT:$PORT project-purple-cow

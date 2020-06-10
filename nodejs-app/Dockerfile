FROM node:12-stretch

# RUN usermod -d /home/robotboy -l robotboy node

# USER robotboy

# COPY --chown=robotboy:robotboy index.js index.js

# WORKDIR /home/robotboy/code

USER node

WORKDIR /home/node/src

COPY --chown=node:node index.js index.js

CMD ["node", "index.js"]
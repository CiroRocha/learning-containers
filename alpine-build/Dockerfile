# Build stage
FROM node:12-stretch AS build
WORKDIR /build
COPY package-lock.json package.json ./
RUN npm ci
COPY . .

# Runtime stage
FROM alpine
# reminder: alpine has NOTHING, it's the barebones. So you should ask for everything you need to use
RUN apk add --update nodejs
# apk means apline package manager, not apt
# not using npm for saving space, not a best practice tho
RUN addgroup -S robotboy && adduser -S robotboy -G robotboy
USER robotboy

RUN mkdir /home/robotboy/src
WORKDIR /home/robotboy/src
COPY --from=build --chown=robotboy:robotboy /build .
# this build was defined i nthe first line, using the AS command

CMD ["node", "index.js"]
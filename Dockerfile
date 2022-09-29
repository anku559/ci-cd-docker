# Use an existing docker image as a base
FROM alpine

# Download and install a dependency
RUN apk add --update redis
RUN mkdir -p /var/www

# Tell the image what to ho when it starts as a container
CMD [ "redis-server" ]
# Pull base image
FROM openjdk:8

MAINTAINER Agon Lohaj <agonlohaj@odysseyprime.nl>
#
# Scala and sbt Dockerfile
#
# original file from
# https://github.com/rowanl/playframework-kubernetes
#

# Env variables
ENV PROJECT_HOME /usr/src
ENV APP_NAME      play-seed
ENV APP_VERSION   1.0

COPY . $PROJECT_HOME/app

# We are running play on this port so expose it
EXPOSE 9000
# Expose this port if you want to enable remote debugging: 5005

# WORKDIR $PROJECT_HOME/app/play-seed

# Unzip the package
# RUN unzip target/universal/$APP_NAME-$APP_VERSION.zip

# Update permissions
# RUN chmod +x $APP_NAME-$APP_VERSION/bin/$APP_NAME

# WORKDIR $APP_NAME-$APP_VERSION
# This will run at start, it points to the .sh file in the bin directory to start the play app
# ENTRYPOINT bin/$APP_NAME
# Add this arg to the script if you want to enable remote debugging: -agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=5005
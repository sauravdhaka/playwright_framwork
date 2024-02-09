# Use Ubuntu as the base image
FROM ubuntu:latest

# Install required packages
RUN apt-get update \
    && apt-get install -y curl gnupg \
    && curl -fsSL https://deb.nodesource.com/setup_16.x | bash - \
    && apt-get install -y nodejs \
    && apt-get install -y openjdk-11-jdk


WORKDIR /app
# Set environment variables
ENV JAVA_HOME /usr/lib/jvm/java-11-openjdk-amd64
ENV PATH $JAVA_HOME/bin:$PATH





COPY e2e /app/e2e
COPY fixtures /app/fixtures
COPY pages /app/pages
COPY package-lock.json /app/
COPY package.json /app/
COPY data /app/data
COPY playwright.config.js /app/
RUN npm install
RUN npx playwright install
RUN npx playwright install-deps
COPY playwright-report /app/playwright-report

CMD ["npm","test"]

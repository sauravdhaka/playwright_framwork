#!/bin/bash

# Start service1 in detached mode
docker-compose up -d playwright-tests1
docker-compose up -d playwright-tests2
# Wait until service1 has completed its execution (you may need to replace this with your own logic)
docker-compose logs -f playwright-tests1
docker-compose logs -f playwright-tests2

# Once service1 has completed, start service2
docker-compose up -d allure-report-generator

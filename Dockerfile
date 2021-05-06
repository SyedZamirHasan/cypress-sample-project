# Docker file for building a container with Cypress
FROM cypress/included:6.8.0
MAINTAINER Hasan, Syed Zamir

# Install cypress cucmber preprocessor
RUN npm install cypress-cucumber-preprocessor
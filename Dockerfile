FROM mcr.microsoft.com/playwright:v1.41.1-jammy



WORKDIR /app



COPY e2e /app/e2e
COPY fixtures /app/fixtures
COPY pages /app/pages
COPY package-lock.json /app/
COPY package.json /app/

RUN npm install


COPY data /app/data
COPY playwright.config.js /app/
EXPOSE 9323
CMD ["npm","test"]


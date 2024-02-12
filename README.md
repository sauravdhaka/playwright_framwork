# PLAYWRIGHT AUTOMATION TEST FRAMEWORK


## Summary

This framework is tailored for automatin gthe testing for any website. With playwright as the core solution for end-to-end testing,ensuring the seamless functionality and user experience of any website accross different clients.

## How do I get set up?
To set up playwright JavaScript automation test framework, follow the instrunction below:

### Prerequisit

- [node above v14](https://nodejs.org/en)

### Installation

1. Clone the repository:

```
git clone https://github.com/sauravdhaka/playwright_framwork.git
```

2. Navigate to the project directory:
   > `cd to project directory`

3. Install the dependencies & playwright dependencies
```    
    npm ci
    npx playwright install
```


### Project Structure

1. Page Structure 
    - Page supporting POM(Page Object Model) structure added at `/pages/PageObjectModel`
    - Locators , constructors and needed function should be in this page claa
    - To make objects available to test class, it needs to be added in Fixture, i.e. `/fixtures/`

2. Framework is designed in such a way that it needs to import from fixtures. This helps to keep imports clean.

3. All tests are declared in e2e folder.


### Dependencies

Ensure all necessary dependencies are installed. Refer to the package.json file for a list of dependencies.

```json
  "devDependencies": {
    "@playwright/test": "^1.41.2",
    "@types/node": "^20.11.13",
    "allure-commandline": "^2.27.0",
    "allure-playwright": "^2.12.0"
  },
  "dependencies": {
    "lighthouse": "^11.5.0",
    "playwright": "^1.41.2",
    "playwright-lighthouse": "^4.0.0"
  }
```

## How to run tests

### Running using different parameters from CLI:

We can run playwright test using command:

To run your tests in headed mode, use the `--headed` flag. This will give you the ability to visually see how Playwright interacts with the website.

```
npx playwright test --headed
```

### Run tests on different browsers

To specify which browser you would like to run your tests on, use the `--project` flag followed by the **name** of the browser.

```
npx playwright test --project firefox
```

To specify multiple browsers to run your tests on, use the `--project` flag multiple times followed by the name of each browser.

```
npx playwright test --project webkit --project firefox
```

### Run specific tests

To run a single test file, pass in the name of the test file that you want to run. This has been done using **crossenv** as **_pre-test_** and **_post-test_** scripts needed to run despite test failure.

```
npx playwright test --testname=login.test.ts
```

To run files that have `cart` or `login` in the file name, simply pass in these keywords to the CLI.

```
npx playwright test cart login
```

To run a test with a specific title, use the `-g` flag followed by the title of the test.

```
npx playwright test -g "add a todo item"
```

## Run test using Docker Image:

### Prerequisit

-   [Docker](https://www.docker.com/)

### Building the Docker Image

```
docker build -t {name_of_image} .
```

### Run the Docker Image

1. Run the Docker Image (with custom container Name) =>

```bash
docker run --name {name_of_image}
```

2. Run image using `compose.yaml` file =>

```bash
docker compose run --name={name_of_image}
```


### Types of test this framework covers

1. Functional Testing of a web application.

2. REST API test (GET and POST).

3. Visual Testing.


#### Functional testing cover following :

1. Login functinality of web application.

2. SignUp functinality of web application.


#### Api testing covers following :

1. GET method with different conditions.

2. POST method with static data.

3. POSTT method with data from a json file.

#### Visual testing covers following :

1. cover visual testing.


### Features playwright framework contains :

1. Added Github action to this framework.

2. Containerzied this framework using docker.

3. Added allure report for better experience.


### Custom CLI commands :

1. for running all types of test together and generating allure report and opening same:
        ```
        npm test
        ```

2. for running only Functional test:
        ```
        npm run functional:test
        ```

3. for running only Api test:
        ```
        npm run api:test
        ```

4. for running only Visual tets:
        ```
        npm run visual:test
        ```

5. for generating the allure-report
        ```
        npm run allure:generate
        ```

6. for opening the allure-report
        ```
        npm run allure:open
        ```

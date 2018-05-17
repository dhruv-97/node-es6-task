# Node ES6 JWT

![](https://img.shields.io/badge/node-success-brightgreen.svg)
![](https://img.shields.io/badge/test-success-brightgreen.svg)

# Stack

![](https://img.shields.io/badge/node_10-✓-blue.svg)
![](https://img.shields.io/badge/ES6-✓-blue.svg)
![](https://img.shields.io/badge/express-✓-blue.svg)
![](https://img.shields.io/badge/mocha-✓-blue.svg)

# File structure

```
node-es6-test/
│
├── api/
│   └── controllers/
│       ├── AuthController.js
│       ├── ImageController.js
│       └── PatchController.js
│   
│
├── config/
│   ├── env/
│   │   ├── development.js
│   │   ├── index.js
│   │   ├── production.js
│   │   └── test.js
│   │
│   ├── routes/
│   │   ├── auth.js
│   │   ├── image.js
│   │   ├── index.js
│   │   └── patch.js
│   │
│   ├── express.js
│   └── winston.js
│
├── test/
│   ├── auth.test.js
│   ├── image.test.js
│   └── patch.test.js
│
├── images/
│
├── thumbnails/
│ 
├── logs/
│   
├── .eslintrc                     * ESLint configuration file
├── .eslintignore                 * ESLint ignore file
├── DockerFile                    * Docker file
├── .dockerignore                 * Docker ignore file
├── .gitignore                    * Example git ignore file
├── index.js                      * Entry point of our Node's app
├── package.json                  * Defines our JavaScript dependencies
├── package-lock.json             * Defines our exact JavaScript dependencies tree
└── README.md                     * This file
```


# How to use this code?

1. Make sure you have the latest stable version of Node.js installed

  ```
  $ sudo npm cache clean -f
  $ sudo npm install -g n
  $ sudo n stable
  ```
  
2. Clone the respository
  
  ```
  $ git clone https://github.com/dhruv_97/node-es6-task
  ```

3. Configure your jsonwebtoken in `config/env`. E.g.:

  ```javascript
  module.exports = {
    jwt: {
      jwtSecret: '$eCrEt',
      jwtDuration: '2 hours',
    }
  };
  ```

4. Navigate into the folder  

  ```
  $ cd node-es6-task
  ```
  
5. Install NPM dependencies

  ```
  $ npm install
  ```
  
6. Run the project

  ```
  $ node index.js
  ```
  
7. Or use `nodemon` for live-reload
  
  ```
  $ npm start
  ```
  
  > `npm start` will run `nodemon index.js`.
  
8. If you want to execute the tests

```
$ npm test
```

> `npm test` will run `mocha` and provide full 100% code coverage with Istanbul.

9. If you want to run the javascript linter
```
$ npm run pretest
```

10. Or fix the styling

```
$ npm run pretest -- --fix
```

# Testing the routes

1. Navigate to `http://localhost:8000/login` in postman and make a post request with the following object

```javascript
  {
      "username" : "dhruv",
      "password" : "1234"
  }
  ```
  >You should see the following response
  ```javascript
  {
       "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImRocnV2IiwiaWF0IjoxNTI2NTY5NDM4LCJleHAiOjE1MjY1NzY2Mzh9.TT97A10iBu9TnRA01PqWsO3RVUehUZ7CNkBHUbIuIHQ"
  }
  ```
2. Navigate to `http://localhost:8000/patch` in postman and make a post request with the following header and following object

`Authorization:Bearer token` 

```javascript
  {
      "original":{},
      "patch":{"op": "add", "path": "/foo", "value": "bar"}
  }
  ```
  >You should see the following response
  ```javascript
  {
      "foo" : "bar"
  }
  ```
3. Navigate to `http://localhost:8000/image` in postman and make a post request with the following header and following object

```javascript
  {
    "url":"https://cdn.pixabay.com/photo/2018/05/15/09/23/raindrop-3402550_640.jpg"
  }
  ```
  >You should recieve a 50x50px thumbnail as response


# Features

1. Used modern javascript ES6 syntax

2. Included a test suite for the microservice and covered 100% code in test suite. Also generated code test coverage reports through Istanbul

3. API rejects all invalid request inputs and there is test for each edge case

4. Integrated a centralized app logging/monitoring system through winston and morgan

5. Used ESlint with airbnb-config and included a linting npm script

6. Included a working Dockerfile with the app directory

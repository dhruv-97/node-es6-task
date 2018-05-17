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


## How to use this code?

1. Make sure you have the latest stable version of Node.js installed

  ```
  $ sudo npm cache clean -f
  $ sudo npm install -g n
  $ sudo n stable
  ```
  
2. Configure your jsonwebtoken in `config/env`. E.g.:

  ```javascript
  module.exports = {
    jwt: {
      jwtSecret: '$eCrEt',
      jwtDuration: '2 hours',
    }
  };
  ```

3. Clone the respository
  
  ```
  $ git clone https://github.com/dhruv_97/node-es6-task
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

9. If you want to run the java linter
```
$ npm run pretest
```

10. Or fix the styling

```
$ npm run pretest -- --fix
```

# Server

## Initialize the project

```shell
npm init -y
```

## Run app

- use ```nodemon index.js``` to track all changes of code in development enviroment
- use ```node index.js``` to run server in production

## Install essential library

- ```dotenv``` : provides necessary values ​​for the program
- ```cors``` : config the conversation between server and client
- ```npm run -D nodemon``` : install in dev env (in case deloying for production, this library won't exist)
- Notice: type for package in order to config using libraray in file ```"commonjs"->"require"```, ```"module"->"import"``` such as ReactJS

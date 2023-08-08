
# JWT Authentication Project

This project is a simple implentation of jwt authentication using typescript, node.js, typeorm, express, mysql and swagger. This project has a simple CRUD API for Tasks which is protected by JWT authentication.
The login endpoint is being used to access/authenticate the user.
 


## Authors

- [@aneeshBakshi](https://github.com/aneeshBakshi)


## Run Locally

Clone the project

```bash
  git clone https://github.com/aneeshBakshi/JWTAuthentication.git
```

Go to the project directory

```bash
  cd JWTAuthentication
```

Create a ".env" file with the following fields and replace the value given in DB_PASSWORD with your mysql connection password.

```bash
PORT = 3000

DB_HOST = localhost
DB_PORT = 3306
DB_USER = root
DB_PASSWORD = yourMysqlPassword
DB_NAME = jwt

ACCESS_TOKEN_SECRET = accessTokenSecret
REFRESH_TOKEN_SECRET = refreshtokenSecret
```

Open MySql and create new database

```bash
  CREATE DATABASE jwt;
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

Run Swagger on your browser by going to the following URL

```bash
  http://localhost:3000/api-docs/
```






## Running Tests

To run tests, run the following command

```bash
  npm run test
```

Go to Swagger by opening a browser and typing the following url

```bash
  http://localhost:3000/api-docs/
```



## Tech Stack


**Server:** Node, Express, TypeScript, TypeORM, MySQL, SwaggerUI


### Population Management API

[![Build Status](https://travis-ci.com/reiosantos/population-management-api.svg?branch=master)](https://travis-ci.com/reiosantos/population-management-api)
[![Maintainability](https://api.codeclimate.com/v1/badges/fd76c0c917ea1c72ebe8/maintainability)](https://codeclimate.com/github/reiosantos/population-management-api/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/fd76c0c917ea1c72ebe8/test_coverage)](https://codeclimate.com/github/reiosantos/population-management-api/test_coverage)
### Setup

#### Inslall

```bash
git clone https://github.com/reiosantos/population-management-api.git

cd https://github.com/reiosantos/population-management-api.git

```

Set the environment variables needed to run the application, A sample **.env.sample** file 
contains all the variables that should be defined.
 
#### Prepare the server

```bash
npm install
npm run db:rollmigrate
```

#### start server

```bash
npm run start:dev
```

Access the api on
```http request
http://localhost:5000/api/v1/
``` 

The API Documentation can be found at **http://localhost:5000/api/v1/docs/** 

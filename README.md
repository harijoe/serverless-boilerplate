# Serverless Boilerplate
The easier serverless boilerplate to get started with

## Installation
```
# If you don't already have the serverless cli installed, do that
npm i -g serverless

# Use the serverless cli to install this repo
serverless install --url https://github.com/harijoe/serverless-boilerplate --name <your-service-name>

# cd into project and set it up
cd <your-service-name>

# Install dependencies
npm i
```

## How to use it ?
First, change service name in `serverless.yml` !

To start offline development:
```
npm start
```

To deploy:
```
sls deploy -s <specify-a-stage>
```

Current available environments are `staging` and `production` but you can configure any environment you like in `env.yml`

## What's included ?
 * Environments
 * Webpack
 * Offline
 * DynamoDB
 * Middlewares
 * Prettier

### Environments
Environments and environment variables can be configured in `env.yml`. `dev` is the one used by default. 
You can deploy to staging or production by using `sls deploy -s prod`. A different dynamoDB instance for each environment will be created. 

### Prettier
Best code formatting tool. It will be automatically run on each commit.

Tweak .prettierrc to match your own flavor.

### Webpack
`serverless-webpack` allows the use of babel plugins to enable modern javascript features. You should not modify its configuration.

Tweak .babelrc to add plugins you want to use.

### Offline
`serverless-offline` is configured to enable offline development, use it with `npm run start`

### DynamoDB
Support for DynamoDB both locally and in the cloud. It's a quite easy to use nosql database

### Middlewares
[Handly](https://github.com/harijoe/handly) is included. It's a handy wrapper for serverless handlers applying very useful middlewares. 

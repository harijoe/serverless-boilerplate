# Serverless Boilerplate
The easiest serverless boilerplate to get started with

_by [@JulienVallini](https://twitter.com/julienvallini)_

## Motivation
Serverless is awesome : no more server to setup, ultra scalable and very cheap. But I found not very easy to find the perfect setup to get started with. Using serverless brings a lot of not well documented pitfalls that drain a considerable amount of time and energy. I made this boilerplate after gathering the solutions to all of these. 

The goal is to keep these pitfalls out of the way.

## Installation
```
# If you don't already have the serverless cli installed, do that
npm i -g serverless

# If it's the first time you use aws, you need to configure credentials
# https://github.com/serverless/serverless/blob/master/docs/providers/aws/guide/credentials.md

# Use the serverless cli to install this repo
serverless install --url https://github.com/harijoe/serverless-boilerplate --name <your-service-name>

# cd into project and set it up
cd <your-service-name>

# Install dependencies
npm i

# Install dynamoDB libs
sls dynamodb install
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
 * Module by absolute path resolution

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

## License
Serverless Boilerplate is [MIT licensed](https://opensource.org/licenses/MIT).

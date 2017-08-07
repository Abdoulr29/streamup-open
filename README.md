[![Build Status](https://travis-ci.org/richard457/streamup-open.svg?branch=master)](https://travis-ci.org/richard457/streamup-open)

# StreamUp-Open
## What you get
* Native Cross platform application
* Easy Hosting with a touch of feeling

##Developement
* Development server with LiveReload
* Karma, Jasmine and Protractor for testing
* Code scaffolding via Angular-CLI
* Application packaging via [electron-forge]
* Yarn

## Getting started
Use the seed via git:
```sh
git clone https://github.com/richard457/streamup-open.git streamup-open
```
After this change into `streamup-open` and run
```sh
npm install -g yarn
yarn install
```
```sh
Note that yarn can be replaced by npm 
```

## Available tools
### Build
Run `electron-forge start` this will start the application.
Run `electron-forge make` to build your desired installer based on the current OS you are using.



### Running unit tests
Run `yarn run test` to execute the unit tests via [Karma](https://karma-runner.github.io).


### Packaging releases
Run `electron-forge make`build binary releases for the specified plattform(s) based on OS you are using.

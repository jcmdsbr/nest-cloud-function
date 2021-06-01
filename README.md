# [GCP]  Cloud functions using nodejs + nestjs

- Node Cloud Functions using Nest standalone application is a wrapper around the Nest IoC container

## Standalone applications

There are several ways of mounting a Nest application. You can create a web app, a microservice or just a bare Nest standalone application (without any network listeners). The Nest standalone application is a wrapper around the Nest IoC container, which holds all instantiated classes. 
We can obtain a reference to any existing instance from within any imported module directly using the standalone application object. 
Thus, you can take advantage of the Nest framework anywhere, including, for example, scripted CRON jobs. You can even build a CLI on top of it.

## Getting started

### Before

- Install firebase-tools

```sh
npm i -g firebase-tools
```

## Init firebase function strucure

```sh
firebase init functions
firebase init emulators
```

### Add Nest to the Functions Source


In functions folder

To create a Nest standalone application and Add , use the following construction:

```sh
npm i --save @nestjs/core @nestjs/common rxjs reflect-metadata
```

If HTTP function install

```sh
npm i --save express @nestjs/platform-express
```

- Create a nest-cli.json file

```json
{
    "language": "ts",
    "collection": "@nestjs/schematics",
    "sourceRoot": "src"
}

```

And add new configuration from tsconfig.json

```json
{
  "compilerOptions": {
    "module": "commonjs",
    "noImplicitReturns": true,
    "noUnusedLocals": true,
    "outDir": "lib",
    "sourceMap": true,
    "strict": false,
    "target": "es2017",
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "declaration": true,
    "removeComments": true,
    "baseUrl": "./",
    "incremental": true,
    "esModuleInterop": true
  },
  "compileOnSave": true,
  "include": [
    "src"
  ]
}
```

## Deploy

```sh
firebase login
firebase deploy --only functions --project [YOUR PROJECT NAME] --region [YOUR PROJECT REGION]
```


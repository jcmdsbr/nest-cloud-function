// import { PubSub } from '@google-cloud/pubsub';
import { NestFactory } from '@nestjs/core';
import * as functions from 'firebase-functions';
import { AppModule } from './app.module';
import { AppService } from './app.service';

const builder = functions.region('us-east1');
const topicName = 'nestjs-test-function';

export const helloWorld = builder.pubsub
  .topic(topicName)
  .onPublish(async () => {
    const app = await NestFactory.createApplicationContext(AppModule);
    const service = app.get(AppService);
    console.log(service.getHelloWorld());
  });

import { PubSub } from '@google-cloud/pubsub';
const pubsub = new PubSub();

export const pubsubWriter = builder.https.onRequest(async (req, res) => {
  console.log('Pubsub Emulator:', process.env.PUBSUB_EMULATOR_HOST);
  await pubsub.topic(topicName).publishJSON({ message: 'Hello' });
  res.sendStatus(200);
});

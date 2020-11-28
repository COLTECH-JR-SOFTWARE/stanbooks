/* eslint-disable no-shadow */
import mqtt from 'mqtt';

const client = mqtt.connect('mqtt://localhost:3334');
const topic = 'StanbooksMQTTTopic';

client.on('message', (topic, message) => {
  message = message.toString();
  console.log(message);
});

client.on('connect', () => {
  client.subscribe(topic);
});

const mqtt = require('mqtt')
const client  = mqtt.connect('mqtt://localhost')
const { v4: uuidv4 } = require('uuid');
const seed = (topic, value) => {
  client.publish(topic, value)
}

const genValue = () => {
  const min = 10;
  const max = 60;
  return Math.floor(Math.random() * (max - min + 1)) + min
}
setInterval(() => {
  const uuid = uuidv4();
  seed('sensor-1', JSON.stringify({id:uuid, deviceName:'sensor-1',date:Date.now(), value: genValue()}))
  seed('sensor-2', JSON.stringify({id:uuid, deviceName:'sensor-2',date:Date.now(), value: genValue()}))
  seed('sensor-3', JSON.stringify({id:uuid, deviceName:'sensor-3',date:Date.now(), value: genValue()}))

}, 10000);

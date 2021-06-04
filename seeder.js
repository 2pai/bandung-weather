const mqtt = require('mqtt')
const client = mqtt.connect('mqtt://172.17.85.17', {clientId: "Sensor-Data"})
const { v4: uuidv4 } = require('uuid');
const seed = (topic, value) => {
  client.publish(topic, value)
}

const genValue = () => {
  const min = 1;
  const max = 70;
  return Math.floor(Math.random() * (max - min + 1)) + min
}
setInterval(() => {
  const uuid = uuidv4();
  const randNum = (Math.floor(Math.random() * 5)+1)
  console.log(randNum);
  for (let i = 1; i <= randNum; i++) {
    console.log(`sensor-${i}`)
    seed(`sensor-${i}`, JSON.stringify({id:uuid, deviceName:`sensor-${i}`,date:Date.now(), value: genValue(), manySensor:randNum}))
  }

}, 5000);

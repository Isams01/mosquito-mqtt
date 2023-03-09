const mqtt = require("mqtt");
const client = mqtt.connect("mqtt://localhost:1883");

client.publish("presence", "Hello mqtt");

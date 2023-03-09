const mqtt = require("mqtt");
const client = mqtt.connect("mqtt://localhost:1883");

client.on("connect", function () {
  client.subscribe("presence", function (err) {
    if (!err) {
      console.log("subscribed to presences from consumer");
    }
  });
});

client.on("message", function (topic, message) {
  // message is Buffer
  console.log(message.toString());
  // client.end();
});

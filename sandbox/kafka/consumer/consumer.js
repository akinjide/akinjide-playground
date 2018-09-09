const kafka = require('no-kafka')

// create kafka consumer instance
const consumer = new kafka.SimpleConsumer
var data = function (messageSet, topic, partition) {
  messageSet.forEach(function(v) {
    console.log(topic, partition, v.offset, v.message.value.toString('utf-8'))
  })
}

// subscribe to kafka topic
return consumer.init().then(function() {
  return consumer.subscribe('kafka-python-topic', data)
})
from kafka import KafkaProducer
from json import dumps

# create kafka producer instance
producer = KafkaProducer(bootstrap_servers="localhost:9092",
                            value_serializer=lambda v: dumps(v).encode('utf-8'))

# invoke producer `.send` method with producer record
for message in range(1000):
    producer.send('kafka-python-topic', {'values':message})
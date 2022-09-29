// const process = require('process');
const express = require('express');
const redis = require('redis');

const app = express();
const client = redis.createClient({
  host: 'redis-server',
  port: 6379,
});
client.set('VISITS', 0);

app.get('/', (req, res) => {
  client.get('VISITS', (err, visits) => {
    // process.exit(1); // Maintenance
    res.send(`Visits: ${visits}`);

    client.set('VISITS', parseInt(visits) + 1);
  });
});

app.listen(8081, () => {
  console.log(`PORT: 8081`);
});

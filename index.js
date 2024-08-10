const express = require('express');
const axios = require('axios');
const url = require('url');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>CloudyChat Free API</title>
      </head>
      <body>
        <h1>CloudyChat API (Free!)</h1>
        <h2>Getting messages</h2>
        <p>Server 1: GET https://cloudychat.vercel.app/api/server1/get</p>
        <p>Server 2: GET https://cloudychat.vercel.app/api/server2/get</p>
        <p>Server 3: GET https://cloudychat.vercel.app/api/server3/get</p>
        <h2>Sending messages</h2>
        <p>Server 1: POST https://cloudychat.vercel.app/api/server1/send</p>
        <p>Server 2: POST https://cloudychat.vercel.app/api/server2/send</p>
        <p>Server 3: POST https://cloudychat.vercel.app/api/server3/send</p>
        <h3>For all the sending messages endpoints body should be the message you want to send!</h3>
      </body>
    </html>
  `);
});

app.get('/api/server1/get', async (req, res) => {
  try {
    const response = await axios.get('http://d90930x1.beget.tech/PocketCodeDB/DATABASE/echo/echo.php?slot=7&token=46609766713SoreAlpha54188945224');
    res.send(response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Error fetching data. Status: 500 Internal server error.');
  }
});

app.get('/api/server2/get', async (req, res) => {
  try {
    const response = await axios.get('http://d90930x1.beget.tech/PocketCodeDB/DATABASE/echo/echo.php?slot=8&token=46609766713SoreAlpha54188945224');
    res.send(response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(400).send('Error fetching data');
  }
});

app.get('/api/server3/get', async (req, res) => {
  try {
    const response = await axios.get('http://d90930x1.beget.tech/PocketCodeDB/DATABASE/echo/echo.php?slot=9&token=46609766713SoreAlpha54188945224');
    res.send(response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Error fetching data');
  }
});

app.post('/api/server1/send', async (req, res) => {
  const message = req.body.text;
  try {
    if (message) {
      const lastmsg = await axios.get(`http://d90930x1.beget.tech/PocketCodeDB/DATABASE/get/get.php?slot=6&token=46609766713SoreAlpha54188945224&get_pe=` + String(message));
      res.send("Successfully sent.");
    } else {
      res.status(400).send("Error sending: Empty value.");
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Error fetching data');
  }
});

app.post('/api/server2/send', async (req, res) => {
  const message = req.body.text;
  try {
    if (message) {
      const response = await axios.get(`http://d90930x1.beget.tech/PocketCodeDB/DATABASE/get/get.php?slot=7&token=46609766713SoreAlpha54188945224`, { get_pe: message } );
      res.send("Successfully sent.");
    } else {
      res.status(400).send("Error sending: Empty value.");
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Error fetching data');
  }
});

app.post('/api/server3/send', async (req, res) => {
  const message = req.body.text;
  try {
    if (message) {
      const response = await axios.get(`http://d90930x1.beget.tech/PocketCodeDB/DATABASE/get/get.php?slot=8&token=46609766713SoreAlpha54188945224`, { get_pe: message } );
      res.send("Successfully sent.");
    } else {
      res.status(400).send("Error sending: Empty value.");
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Error fetching data');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

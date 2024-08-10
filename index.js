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
    const msg1 = await axios.get('http://d90930x1.beget.tech/PocketCodeDB/DATABASE/echo/echo.php?slot=7&token=46609766713SoreAlpha54188945224');
    const msg2 = await axios.get('http://d90930x1.beget.tech/PocketCodeDB/DATABASE/echo/echo.php?slot=11&token=46609766713SoreAlpha54188945224');
    const msg3 = await axios.get('http://d90930x1.beget.tech/PocketCodeDB/DATABASE/echo/echo.php?slot=12&token=46609766713SoreAlpha54188945224');
    const msg4 = await axios.get('http://d90930x1.beget.tech/PocketCodeDB/DATABASE/echo/echo.php?slot=13&token=46609766713SoreAlpha54188945224');
    const msg5 = await axios.get('http://d90930x1.beget.tech/PocketCodeDB/DATABASE/echo/echo.php?slot=14&token=46609766713SoreAlpha54188945224');
    res.json(`{"last": '${msg1}', "2nd": '${msg2}', "3rd": '${msg3}', "4th": '${msg4}', "5th": '${msg5}'}`);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Error fetching data');
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
      const msgcontent4 = await axios.get('http://d90930x1.beget.tech/PocketCodeDB/DATABASE/echo/echo.php?slot=13&token=46609766713SoreAlpha54188945224')
      const msgcontent3 = await axios.get('http://d90930x1.beget.tech/PocketCodeDB/DATABASE/echo/echo.php?slot=12&token=46609766713SoreAlpha54188945224')
      const msgcontent2 = await axios.get('http://d90930x1.beget.tech/PocketCodeDB/DATABASE/echo/echo.php?slot=11&token=46609766713SoreAlpha54188945224')
      const msgcontent1 = await axios.get('http://d90930x1.beget.tech/PocketCodeDB/DATABASE/echo/echo.php?slot=7&token=46609766713SoreAlpha54188945224')
      const msg5 = await axios.get('http://d90930x1.beget.tech/PocketCodeDB/DATABASE/get/get.php?slot=13&token=46609766713SoreAlpha54188945224', { get_pe: msgcontent4 } )
      const msg4 = await axios.get('http://d90930x1.beget.tech/PocketCodeDB/DATABASE/get/get.php?slot=12&token=46609766713SoreAlpha54188945224', { get_pe: msgcontent3 } )
      const msg3 = await axios.get('http://d90930x1.beget.tech/PocketCodeDB/DATABASE/get/get.php?slot=11&token=46609766713SoreAlpha54188945224', { get_pe: msgcontent2 } )
      const msg2 = await axios.get('http://d90930x1.beget.tech/PocketCodeDB/DATABASE/get/get.php?slot=10&token=46609766713SoreAlpha54188945224', { get_pe: msgcontent1 } )
      const lastmsg = await axios.get('http://d90930x1.beget.tech/PocketCodeDB/DATABASE/get/get.php?slot=6&token=46609766713SoreAlpha54188945224', { get_pe: message });
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

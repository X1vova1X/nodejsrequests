const express = require('express');
const axios = require('axios');
const url = require('url');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.sendFile('public/api.html', { root: __dirname });
});

app.get('/api/server3/send', async (req, res) => {
  const message = req.query.text;
  try {
    if (message) {
      const response = await axios.get(`http://d90930x1.beget.tech/PocketCodeDB/DATABASE/get/get.php?slot=8&token=46609766713SoreAlpha54188945224&get_pe=${message}`);
      res.send("Successfully sent.");
    } else {
      res.status(400).send("Error sending: Empty value.");
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Error fetching data');
  }
});

app.get('/api/server1/get', async (req, res) => {
  try {
    const response = await axios.get('http://d90930x1.beget.tech/PocketCodeDB/DATABASE/echo/echo.php?slot=7&token=46609766713SoreAlpha54188945224');
    res.send(response.data);
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

app.get('/api/server1/send', async (req, res) => {
  const message = req.query.text;
  try {
    if (message) {
      const response = await axios.get(`http://d90930x1.beget.tech/PocketCodeDB/DATABASE/get/get.php?slot=6&token=46609766713SoreAlpha54188945224&get_pe=${message}`);
      res.send("Successfully sent.");
    } else {
      res.status(400).send("Error sending: Empty value.");
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Error fetching data');
  }
});

app.get('/api/server2/send', async (req, res) => {
  const message = req.query.text;
  try {
    if (message) {
      const response = await axios.get(`http://d90930x1.beget.tech/PocketCodeDB/DATABASE/get/get.php?slot=7&token=46609766713SoreAlpha54188945224&get_pe=${message}`);
      res.send("Successfully sent.");
    } else {
      res.status(400).send("Error sending: Empty value.");
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Error fetching data');
  }
});

app.get('/api/server3/send', async (req, res) => {
  const message = req.query.text;
  try {
    if (message) {
      const response = await axios.get(`http://d90930x1.beget.tech/PocketCodeDB/DATABASE/get/get.php?slot=8&token=46609766713SoreAlpha54188945224&get_pe=${message}`);
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

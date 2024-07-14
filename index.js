const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

app.get('/server1', async (req, res) => {
  try {
    const response = await axios.get('http://d90930x1.beget.tech/PocketCodeDB/DATABASE/echo/echo.php?slot=7&token=46609766713SoreAlpha54188945224');
    res.send(response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Error fetching data');
  }
});

app.get('/server2', async (req, res) => {
  try {
    const response = await axios.get('http://d90930x1.beget.tech/PocketCodeDB/DATABASE/echo/echo.php?slot=8&token=46609766713SoreAlpha54188945224');
    res.send(response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Error fetching data');
  }
});

app.get('/server3', async (req, res) => {
  try {
    const response = await axios.get('http://d90930x1.beget.tech/PocketCodeDB/DATABASE/echo/echo.php?slot=9&token=46609766713SoreAlpha54188945224');
    res.send(response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Error fetching data');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
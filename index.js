const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

// Helper function to fetch data from the external URLs
async function fetchData(slot) {
  try {
    const response = await axios.get(`http://d90930x1.beget.tech/PocketCodeDB/DATABASE/echo/echo.php?slot=${slot}&token=46609766713SoreAlpha54188945224`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching data for slot ${slot}:`, error);
    throw error;
  }
}

// Endpoint to fetch data for slot 7
app.get('/server1', async (req, res) => {
  try {
    const data = await fetchData(7);
    res.send(data);
  } catch (error) {
    res.status(500).send('Error fetching data');
  }
});

// Endpoint to fetch data for slot 8
app.get('/server2', async (req, res) => {
  try {
    const data = await fetchData(8);
    res.send(data);
  } catch (error) {
    res.status(500).send('Error fetching data');
  }
});

// Endpoint to fetch data for slot 9
app.get('/server3', async (req, res) => {
  try {
    const data = await fetchData(8);
    res.send(data);
  } catch (error) {
    res.status(500).send('Error fetching data');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

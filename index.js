const express = require('express');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3001;

app.use(express.static('public'));

app.get('/joke', async (req, res) => {
  try {
    const response = await axios.get('https://icanhazdadjoke.com/', {
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'Dad Jokes App (https://github.com/itsvins63/dad-jokes)'
      }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch joke' });
  }
});

app.listen(port, () => {
  console.log(`Dad jokes app listening at http://localhost:${port}`);
});
const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Define an API route to fetch data from a public API
app.get('/api/data', async (req, res) => {
  try {
    const apiResponse = await axios.get('https://jsonplaceholder.typicode.com/users'); // Replace with the actual API endpoint.
    const data = apiResponse.data;
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data from the API' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

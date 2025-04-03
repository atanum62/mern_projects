const express = require('express');
const cors = require('cors'); // Add CORS support
require('dotenv').config()
// console.log(process.env.port);
const app = express();
const port = process.env.PORT || 3000;

// Enable CORS
app.use(cors());

// API endpoint
app.get('/api', (req, res) => {
    res.json({"users":["iiooj","nwrji","win3"]});
});

// Start server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
// # Entry point to start the server
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Initial test endpoint
app.get('/', (req, res) => {
    res.send('Server is up and running!');
});

// Start server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
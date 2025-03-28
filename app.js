// app.js

const express = require('express');
const app = express();
const port = 3000;

// Route
app.get('/', (req, res) => {
  res.send('Hello, Node.js!');
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

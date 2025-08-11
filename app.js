const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hey, Azure! This is a Node.js application.');
});

module.exports = app;  // Export app only, no app.listen here

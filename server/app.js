const express = require('express');
const app = express();

app.get('/login', (req, res) => {
  res.send('Login Page');
});

const port = 3000;

app.listen(port, () => {
  console.log('express server listening ' + port);
});

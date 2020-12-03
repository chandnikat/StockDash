const express = require('express');
const app = express();
const path = require('path');


// serve index.html on the route '/'
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

app.listen(3000, () => console.log("Localhost Running") )
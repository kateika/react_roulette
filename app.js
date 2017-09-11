const express = require('express');
const app = express();

app.use(express.static('production-build'));

app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});
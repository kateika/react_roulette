import fallback from 'express-history-api-fallback';
import express from 'express';
const app = express();
const root = `${__dirname}/build`;

app.use(express.static('build'));
app.use(fallback('index.html', { root }))

app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});

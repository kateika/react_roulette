import fallback from 'express-history-api-fallback';
import express from 'express';
const app = express();
const root = `${__dirname}/build`;
//import { renderToString } from "react-dom/server";
//import { renderFullPage } from "./src/server";

app.use(express.static('build'));
app.get('/dev', (req, res) =>  {
  //res.send(renderToString(renderFullPage));
  res.send('hello');
});

app.use(fallback('index.html', { root }));


app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});

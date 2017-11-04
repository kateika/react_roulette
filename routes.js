import fallback from 'express-history-api-fallback';
import express from 'express';
const app = express();
const root = `${__dirname}/build`;
import React from 'react';
import { renderToString } from "react-dom/server";
import { renderFullPage } from "./src/server/index";
import { MemoryRouter } from 'react-router-dom';
import { MovieCard } from "./src/components/MovieCard";

app.use(express.static('build'));
app.get('/dev', (req, res) =>  {
  let renderedComponent = renderToString(
    <MemoryRouter>
      <MovieCard />
    </MemoryRouter>
  );
  let html = renderFullPage(renderedComponent, {});
  //res.send(renderToString(renderFullPage));
  res.send(html);
});

app.use(fallback('index.html', { root }));


app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});

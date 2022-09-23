import express from 'express';

const app = express();

app.get('/ads', (_req, res) => {
  return res.json([
    { user: "teste" }
  ])
});

app.listen(3333);
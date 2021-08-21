import express from 'express';
import { json } from 'body-parser';

const app = express();
app.use(json());

app.get('/hello', (req, res) => {
  const text = 'Xin chao ngoc anh!';
  console.log(text);
  res.send(text)
});
export { app };

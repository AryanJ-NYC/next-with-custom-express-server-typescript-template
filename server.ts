import express from 'express';
import next from 'next';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get('/api/hello-world', (_, res) => {
    res.json({ message: 'Hello, World!' });
  });

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  const port = process.env.PORT ?? 3000;
  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on port ${port}`);
  });
});

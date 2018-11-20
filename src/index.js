import './env';
import express from 'express';
import bodyParser from 'body-parser';

import * as userService from './services/users';
import { connectAllDb } from './connectionManager';
import * as connectionResolver from './middlewares/connectionResolver';

const PORT = 8080;

const app = express();

app.set('port', PORT);
app.use(bodyParser.json());

connectAllDb();

app.use(connectionResolver.resolve);

// API Route
app.get('/', (req, res, next) => {
  res.json({ body: 'Hello multi-tenant application.' });
});

app.get('/users', async (req, res, next) => {
  const users = await userService.getAll();

  res.json({ body: users });
});

app.listen(PORT, () => {
  console.log(`Express server started at port: ${PORT}`);
});

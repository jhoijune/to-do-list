import express from 'express';
import logger from 'morgan';
import path from 'path';
import { config } from 'dotenv';

import apiRouter from './routes/api';
import { sequelize } from './models';

config();

const app = express();
sequelize.sync();

app.set('port', process.env.PORT || 3000);

if (process.env.NODE_ENV === 'production') {
  app.use(logger('combined'));
} else {
  app.use(logger('dev'));
}
app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api', apiRouter);
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.listen(app.get('port'), () => {
  console.log(`${app.get('port')}번 포트에서 대기 중]`);
});

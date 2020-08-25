const express = require('express');
const logger = require('morgan');
const path = require('path');
const { config } = require('dotenv');

const apiRouter = require('./routes/api');
const { sequelize } = require('./models');

config();

const app = express();
sequelize.sync();

app.set('port', process.env.PORT || 3000);

if (process.env.NODE_ENV === 'production') {
  app.use(logger('combined'));
} else {
  app.use(logger('dev'));
}

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api', apiRouter);
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.listen(app.get('port'), () => {
  console.log(`${app.get('port')}번 포트에서 대기 중]`);
});

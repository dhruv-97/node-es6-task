const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const winston = require('./winston');
const routes = require('./routes/index');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('combined', { stream: winston.stream }));
// Mount all routes on / path
app.use('/', routes);
// error handler
app.use((err, req, res, next) => {
  // add this line to include winston logging
  winston.error(`${err.status || 500} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);

  // render the error page
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: err,
  });
  next();
});
module.exports = app;

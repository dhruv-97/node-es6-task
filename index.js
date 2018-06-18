const app = require('./config/express');
const logger = require('./config/winston');

const port = 9000;

app.listen(port, () => {
  logger.info(`The server is running at localhost: ${port}`);
});

module.exports = app;

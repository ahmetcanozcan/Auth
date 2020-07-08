const express = require('express');
const mongo = require('./db/mongo');
const { setRouters } = require('./router');
const cors = require('cors');
const morgan = require('morgan');

const bodyParser = require('body-parser');
const rabbit = require('./tool/rabbit');

(async function () {

  // Instantiate passport.js
  require('./tool/passport');

  // Established mongodb connection
  await mongo.connect();

  // Establish rabbitMQ connection
  await rabbit.start();

  // Instantiate an express app
  const app = express();

  // Set 3th party middlewares
  app.use(bodyParser.json());
  app.use(cors());
  app.use(morgan('tiny'));

  // Set routers to application
  setRouters(app);

  const PORT = process.env.AUTH_PORT || 3000;

  app.listen(PORT, port => console.log(`Listening port ${PORT}`));


})()
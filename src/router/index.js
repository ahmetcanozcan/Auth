const BASE_URL = "/auth";


/**
 * Set routers to an express app. 
 * @param {Express.Application} app
 */
function setRouters(app) {
  app.use(BASE_URL + '/login', require('./login'));
  app.use(BASE_URL + '/signup', require('./signup'));
  app.use(BASE_URL + '/resolve', require('./resolve'));
  app.use(BASE_URL + '/', require('./data'));
}

module.exports = { setRouters };


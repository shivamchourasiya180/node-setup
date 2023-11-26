const outerRoute = require('./outerRoute');

class RoutesCustom {
  constructor(app) {
    app.use('/', outerRoute);
  };
};

module.exports = RoutesCustom;
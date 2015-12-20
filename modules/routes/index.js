module.exports = (function() {
  'use strict';

  var errors = require('./errors');

  var routes = {};
  
  routes.setRoutes = function(app, kursrs) {
    app.get('/', routes.home);
    
    errors.setErrors(app);
  };

  routes.home = function(req, res) {
    res.render('home', {});
  };

  return routes;
}());

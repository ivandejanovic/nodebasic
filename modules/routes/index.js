http = require('http');

module.exports = (function() {
  'use strict';

  var errors = require('./errors');

  var routes = {};
  
  routes.setRoutes = function(app, kursrs) {
    app.get('/', routes.home);
    app.get('/ajax', routes.ajax);
    
    errors.setErrors(app);
  };

  routes.home = function(req, res) {
    res.render('home', {});
  };
  
  routes.ajax = function(req, res) {
    var options = {
      host: 'www.google.com',
      path: '/'
    };
    
    http.request(options, function(response){
      var data = '';

      response.on('data', function(chunk) {
        data += chunk;
      });

      response.on('end', function() {
        res.send(data);
      });

      response.on('error', function(err) {
        console.log('Problem with request: ' + err.message);
      });
    }).end();
  };

  return routes;
}());

module.exports = (function() {
  'use strict';
  
  var errors = {};
  
  errors.setErrors = function(app) {
    //404
    app.use(function(req, res, next) {
      res.status(404);
      
      if (req.accepts('html')) {
        return res.send('<h2>Page not found</h2>');
      }
      
      if (req.accepts('json')) {
        return res.json({error: 'Not found'});
      }
      
      res.type('txt');
      res.send('Resource not found');
    });
    
    //500
    app.use(function(err, req, res, next) {
      console.error('error at %s\n', req.url, err);
      res.send(500, 'Error occurred');
    });
  };

  return errors;
}());

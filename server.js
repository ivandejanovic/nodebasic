(function() {
  'use strict';

  var express = require('express'),
      http = require('http'),
      path = require('path'),
      morgan = require('morgan'),
      bodyParser = require('body-parser'),
      methodOverride = require('method-override'),
      errorhandler = require('errorhandler'),
      app = express(),
      server = http.createServer(app),
      routes = require('./modules/routes'),
      port = 8080;

  //all environments
  app.set('port', process.env.PORT || port);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(morgan('tiny'));
  app.use(bodyParser.urlencoded({extended : true}));
  app.use(bodyParser.json());
  app.use(methodOverride());
  app.use(express.static(path.join(__dirname, 'public')));

  // development only
  if (app.get('env')  === 'development') {
    app.use(errorhandler());
    app.locals.pretty = true;
  }

  routes.setRoutes(app);

  server.listen(app.get('port'), function(){
    console.log('Node basic server listening on port ' + app.get('port') + ' in mode ' + app.get('env'));
  });
}());

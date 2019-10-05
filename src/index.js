const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const errorhandler = require('errorhandler');
const Router = require('./router/router').default;

const app = express();
const port = 8080;

// all environments
app.set('port', process.env.PORT || port);
app.set('views', path.join(__dirname, '/../views'));
app.set('view engine', 'pug');
app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(express.static(path.join(__dirname, '/../public')));

// development only
if (app.get('env') === 'development') {
  app.use(errorhandler());
  app.locals.pretty = true;
}

// eslint-disable-next-line no-new
new Router(app);

app.listen(app.get('port'), () => {
  console.log(`Node basic server listening on port ${app.get('port')} in mode ${app.get('env')}`);
});

module.exports = {
  app
};

const http = require('http');

const errors = require('./errors');

function home(req, res) {
  res.render('home', {});
}

function ajax(req, res) {
  const options = {
    host: 'www.google.com',
    path: '/'
  };

  http
    .request(options, (response) => {
      let data = '';

      response.on('data', (chunk) => {
        data += chunk;
      });

      response.on('end', () => {
        res.send(data);
      });

      response.on('error', (err) => {
        console.log(`Problem with request: ${err.message}`);
      });
    })
    .end();
}

function setRoutes(app) {
  app.get('/', home);
  app.get('/ajax', ajax);

  errors.setErrors(app);
}

module.exports = {
  setRoutes
};

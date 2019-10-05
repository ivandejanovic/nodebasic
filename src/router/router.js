/* eslint-disable class-methods-use-this */
const axios = require('axios');

class Router {
  constructor(app) {
    this.setRouter(app);
  }

  home(req, res) {
    res.render('home', {});
  }

  async ajax(req, res) {
    try {
      const response = await axios.get('http://google.com');
      res.send(response.data);
    } catch (e) {
      console.log(e);
      res.status(404).send('Error getting data');
    }
  }

  setErrors(app) {
    // 404
    app.use((req, res) => {
      res.status(404);

      if (req.accepts('html')) {
        res.send('<h2>Page not found</h2>');
      } else if (req.accepts('json')) {
        res.json({ error: 'Not found' });
      } else {
        res.type('txt');
        res.send('Resource not found');
      }
    });

    // 500
    app.use((err, req, res) => {
      console.error('error at %s\n', req.url, err);
      res.send(500, 'Error occurred');
    });
  }

  setRouter(app) {
    app.get('/', this.home.bind(this));
    app.get('/ajax', this.ajax.bind(this));

    this.setErrors(app);
  }
}

module.exports = Router;

const axios = require('axios');

const errors = require('./errors');

function home(req, res) {
  res.render('home', {});
}

async function ajax(req, res) {
  try {
    const response = await axios.get('http://google.com');
    res.send(response.data);
  } catch (e) {
    console.log(e);
    res.status(404).send('Error getting data');
  }
}

function setRoutes(app) {
  app.get('/', home);
  app.get('/ajax', ajax);

  errors.setErrors(app);
}

module.exports = {
  setRoutes
};

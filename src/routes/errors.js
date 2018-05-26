function setErrors(app) {
  // 404
  app.use((req, res) => {
    res.status(404);

    if (req.accepts('html')) {
      res.send('<h2>Page not found</h2>');
    } else if (req.accepts('json')) {
      res.json({ error: 'Not found' });
    }

    res.type('txt');
    res.send('Resource not found');
  });

  // 500
  app.use((err, req, res) => {
    console.error('error at %s\n', req.url, err);
    res.send(500, 'Error occurred');
  });
}

module.exports = {
  setErrors
};

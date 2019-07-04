module.exports = app => {
  app.use('/api/users', require('./api/users'));
  app.use('/api/login', require('./api/login'));
};

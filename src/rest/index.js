module.exports = app => {
  app.use('/api/users', require('./api/users'));
  app.use('/api/getLogin', require('./api/getLogin'));
};

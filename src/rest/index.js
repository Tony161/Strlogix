module.exports = app => {
  app.use('/api/users', require('./api/users'));
  app.use('/api/login', require('./api/login'));
  app.use('/api/profile', require('./api/profile'));
  app.use('/api/usersManagment', require('./api/usersManagment'));
};

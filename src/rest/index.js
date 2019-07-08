module.exports = app => {
  app.use('/api/users', require('./api/users'));
  app.use('/api/auth', require('./api/auth'));
  app.use('/api/profile', require('./api/profile'));
  app.use('/api/usersManagment', require('./api/usersManagment'));
};

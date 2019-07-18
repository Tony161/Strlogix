module.exports = app => {
  app.use('/api/users', require('./api/users'));
  app.use('/api/auth', require('./api/auth'));
  app.use('/api/profile', require('./api/profile'));
  app.use('/api/usersManagment', require('./api/usersManagment'));
  app.use('/api/invitationUsers', require('./api/invitationUsers'));
  app.use('/api/images', require('./api/images'));
};

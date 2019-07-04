const mysql = require('mysql');
const config = require('config');

module.exports = () => {
  const dbHost = config.get('db.host');
  const dbUser = config.get('db.user');
  const dbPassword = config.get('db.password');
  const dbDatabase = config.get('db.database');

  const connection = mysql.createConnection({
    host: dbHost,
    user: dbUser,
    password: dbPassword,
    database: dbDatabase,
  });
  connection.connect();
  return connection;
};

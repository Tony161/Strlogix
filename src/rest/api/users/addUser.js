const connect = require('../../../../src/db/connect');

const addUser = (req, res) => {
  var connection = connect();
  var query = `INSERT into users ( firstName, lastName, title, email, password ) values ('${
    req.body.firstName }', '${req.body.lastName}', '${ req.body.title }', '${req.body.email}', '${req.body.password}')`;

  connection.query(query, (error, results, fields) => {
    if (error) throw error;
    connection.end();
  res.json({ result: 'Ok' });
  });
};

module.exports = addUser;

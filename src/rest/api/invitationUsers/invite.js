const connect = require('../../../db/connect');

const invite = (req, res) => {
  var connection = connect();
  var query = `INSERT into invite_users ( firstName, lastName, title, email, role ) values ('${
    req.body.firstName
  }', '${req.body.lastName}', '${req.body.title}', '${req.body.email}', '${
    req.body.role
  }')`;

  connection.query(query, (error, results, fields) => {
    if (error) throw error;
    connection.end();
    res.json({ result: 'Ok' });
  });
};

module.exports = invite;

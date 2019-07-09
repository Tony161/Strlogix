const connect = require('../../../db/connect');

const get = (req, res) => {
  var connection = connect();
  connection.query(
    'SELECT * FROM users WHERE email = ?',
    [req.params.email],
    (err, rows, fields) => {
      if (!err) {
        res.send(rows[0]);
        console.log(JSON.stringify(rows, null, 2));
      } else {
        console.log(err);
      }
      connection.end();
    },
  );
};

module.exports = get;

const connect = require('../../../db/connect');

const get = (req, res) => {
  var connection = connect();
  connection.query(
    'SELECT * FROM users WHERE email= ?',
    [req.params.email],
    (err, result, fields) => {
      if (!err) {
        res.send(result[0]);
      } else {
        console.log(err);
      }
      connection.end();
    },
  );
};

module.exports = get;

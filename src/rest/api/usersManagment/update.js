const connect = require('../../../db/connect');

const update = (req, res) => {
  var connection = connect();
  connection.query(
    'UPDATE users SET role= ?, active = ? WHERE email= ?',
    [req.body.role, req.body.active, req.params.email],
    (err, rows, fields) => {
      if (!err) {
        res.send(rows);
      } else {
        console.log(err);
      }
      connection.end();
    },
  );
};

module.exports = update;

const connect = require('../../../db/connect');

const update = (req, res) => {
  console.log(req.body);
  var connection = connect();
  connection.query(
    'UPDATE users SET role= ?, active = ? WHERE id= ?',
    [req.body.role, req.body.active, req.params.id],
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

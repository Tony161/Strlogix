const connect = require('../../../db/connect');

const update = (req, res) => {
  var connection = connect();
  connection.query(
    'UPDATE users SET firstName= ?, lastName= ?, title= ? WHERE email= ?',
    [req.body.firstName, req.body.lastName, req.body.title, req.params.email],
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

const connect = require('../../../db/connect');

const update = (req, res) => {
  var connection = connect();
  // console.log('11233', req.body.role, req.body.active, req.params);
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

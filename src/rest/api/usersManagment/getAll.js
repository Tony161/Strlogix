const connect = require('../../../db/connect');

const getAll = (req, res) => {
  var connection = connect();
  connection.query(
    'SELECT * FROM users',
    (err, rows, fields) => {
      if (!err) {
        res.send(rows);
        console.log(JSON.stringify(rows, null, 2));
      } else {
        console.log(err);
      }
      connection.end();
    },
  );
};

module.exports = getAll;

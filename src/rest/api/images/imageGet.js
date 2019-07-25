const connect = require('../../../db/connect');

const getImage = (req, res) => {
  var connection = connect();
  connection.query(
    'SELECT image FROM users WHERE email= ?',
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

module.exports = getImage;

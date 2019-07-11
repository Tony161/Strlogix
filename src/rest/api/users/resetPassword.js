const connect = require('../../../db/connect');

const resetPassword = (req, res) => {
  var connection = connect();
  connection.query(
    'UPDATE users SET password= ? WHERE email= ?',
    [req.body.new_password, req.params.email],
    (err, rows, fields) => {
      if (!err) {
        res.send({rows, status: 'success'});
      } else {
        console.log(err);
      }
      connection.end();
    },
  );
};

module.exports = resetPassword;

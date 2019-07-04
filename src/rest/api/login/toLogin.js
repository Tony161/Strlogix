const connect = require('../../../db/connect');

const toLogin = (req, res) => {
  console.log(req.body)
  const query =
    'select * from users where email = ? and password =?';
  const connection = connect();
  connection.query(
    query,
    [req.body.email, req.body.password],
    (err, rows, fields) => {
      if (!err) {
        res.send(rows);
        console.log(JSON.stringify(rows, null, 2));
      } else {
        console.log(err);
      }
      connection.end();
  });
}


  module.exports = toLogin

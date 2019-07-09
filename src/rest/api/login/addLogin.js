const connect = require('../../../db/connect');

const addLogin = (req, res) => {
  const query = 'select * from users where email= ? and password= ?';
  const connection = connect();
  connection.query(
    query,
    [req.body.email, req.body.password],
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

module.exports = addLogin;

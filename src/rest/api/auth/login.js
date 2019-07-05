const connect = require('../../../db/connect');

const addLogin = (req, res) => {
  console.log(req.body);
  const query = 'select * from users where email= ? and password= ?';
  const connection = connect();
  connection.query(
    query,
    [req.body.email, req.body.password],
    (err, rows, fields) => {
      if (err) {
        console.log(err);
      } else if (rows.length !== 0) {
        // res.send(rows[0].firstName);
        res.json({ loggedIn: true, status: 'Ok', email: rows[0].email });
        console.log(JSON.stringify(rows, null, 2));
      } else {
        // res.send('Wrong Password or Email');
        res.json({ loggedIn: false, status: 'Wrong Password or Email' });
      }
      connection.end();
    },
  );
};

module.exports = addLogin;

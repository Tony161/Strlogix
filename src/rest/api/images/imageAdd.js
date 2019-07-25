const connect = require('../../../db/connect');
md5 = require('js-md5');
var fs = require('fs');

const imageAdd = (data, res) => {
  const email = data.body.image.email;
  const b64string = data.body.image.image.split(',')[1];
  const buffer = Buffer.from(b64string, 'base64');
  const extension = data.body.image.type.split('/')[1];
  let newName =
    md5(
      Math.random()
        .toString(36)
        .substring(2, 15),
    ) +
    '.' +
    extension;
  fs.writeFileSync(`uploads/${newName}`, buffer);

  var connection = connect();
  connection.query(
    'UPDATE users SET image= ? WHERE email= ?',
    [newName, email],
    (err, rows, fields) => {
      if (!err) {
        res.send('ok');
      } else {
        console.log(err);
      }
      connection.end();
    },
  );
};

module.exports = imageAdd;

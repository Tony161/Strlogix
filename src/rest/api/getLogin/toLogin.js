const connect = require('../../../db/connect');
const format = require('date-fns/format');

function toLogin (email, password) {
  return new Promise((resolve, reject) => {
    const query =
      'select * from users where email = ? and password =?';
    const connection = connect();
    connection.query(query, [email, password], (error, results, fields) => {
      connection.end();
      resolve(results[0]);
    });
  });
}
// where users.uuid = authtokens.uuid and users.uuid = ? and authtokens.token = ?'

// async function addWizard(req, res) {
//   try {
//     const user = await getUser(req.body.hostUuid, req.body.hostToken);

//     const engagementDate = format(
//       new Date(req.body.engagementDate),
//       'YYYY-MM-DD',
//     );
//     const weddingDate = format(new Date(req.body.weddingDate), 'YYYY-MM-DD');
//     const wuid = generateWuid();
//     const values = [
//       wuid,
//       user.id,
//       user.uuid,
//       'null', // Spouse's UUID is not yet known
//       weddingDate,
//       engagementDate,
//       req.body.place || '',
//       req.body.address && req.body.address.address,
//       req.body.address && req.body.address.city,
//       req.body.address && req.body.address.state,
//       req.body.address && req.body.address.zip,
//       req.body.location && req.body.location.lat,
//       req.body.location && req.body.location.lng,
//       req.body.color,
//     ];

//     await createWedding(values);
//     await addUserToWedding(user.uuid, wuid, 'admin', 'Host');

//     res.json({ result: 'Ok', wuid });
//   } catch (e) {
//     console.log('Exception caught when adding new wedding', e.message);
//     res.sendStatus(500);
//   }
// }

module.exports = toLogin;

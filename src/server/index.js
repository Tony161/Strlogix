const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const request = require('request');
const config = require('config');
const serveIndex = require('serve-index');
const addRestRoutes = require('../rest');
const cors = require('cors');

const app = express();

app.use(bodyParser.json({ limit: '10mb', extended: true }));
app.use(cors());

addRestRoutes(app);

const serverListenHost = config.get('server.listenHostname');
const serverPort = config.get('server.port');

app.listen(serverPort, serverListenHost, () =>
  console.log(`Server listening on port ${serverListenHost}:${serverPort}!`),
);

app.use('/uploads', serveIndex('uploads')); // shows you the file list
app.use('/uploads', express.static('uploads')); // serve the actual files
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../uploads'));
});

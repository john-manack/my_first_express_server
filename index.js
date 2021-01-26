'use strict';
const HTTP = require('http');

const HOSTNAME = '127.0.0.1';
const PORT = 3000;

const express = require('express');
const app = express();

const SERVER = HTTP.createServer(app);

SERVER.listen(PORT, HOSTNAME, function () {
    // We're using this console.log to let us know that the server is running.
    console.log(`Server is running at http://${HOSTNAME}:${PORT}/`);
});

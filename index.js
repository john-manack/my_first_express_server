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

// the '/' below is known as the "root route" :D
app.get('/', function (req, res) {
    res.send('Hello from Express');
});

// "root route" should be written first, followed by all subsequent routes (eg. "/friends" below)
app.get('/friends', function (req, res) {
    res.send('This will be a friends list');
});
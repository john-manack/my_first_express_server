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

const rootController = require("./routes/index");
const friendsController = require("./routes/friends");

// Hey, Express... use the following functions if the user browses to the ROOT route

//Hey, Web Dev Person, I'll use the Express ROuter here for this route
app.use('/', rootController); // <-- Root route
app.use('/friends', friendsController); // <-- /friends route
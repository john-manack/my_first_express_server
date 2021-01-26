'use strict';
const express = require("express"),
    router = express.Router();

// When you're in a route file, the ROOT points to itself. That's why we use a '/' below instead of '/friends'.
router.get('/', function (req, res) {
    res.send('This will be a friends list');
});

module.exports = router;
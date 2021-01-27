'use strict';
const express = require("express"),
    router = express.Router();

// the '/' below is known as the "root route" :D
router.get('/', (req, res) => {
    res.send('Hello from Express');
});

module.exports = router;
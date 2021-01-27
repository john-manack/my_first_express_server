'use strict';
const express = require("express"),
    router = express.Router();

const friendsArray = require('../db')

// When you're in a route file, the ROOT points to itself. That's why we use a '/' below instead of '/friends'.
router.get('/', (req, res) => {
    let htmlData = `<ul>`;
    friendsArray.map((friend) => {
        htmlData += `<li>${friend.name}</li>`
    })
    htmlData += `</ul> `;
    res.send(htmlData);
});

module.exports = router;
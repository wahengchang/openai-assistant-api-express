const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    res.send('Hello api assistant!')
})
module.exports = router;
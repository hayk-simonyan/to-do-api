const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

// / => GET
router.get('/', (req, res, next) => {
    console.log('in last stand');
    res.sendFile(path.join(rootDir, 'views', 'index.html'));
});

module.exports = router;
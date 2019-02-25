const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();


// tasks/add-list => GET
router.get('/add-list', (req, res, next) => {
    console.log('in add-list middleware');
    res.sendFile(path.join(rootDir, 'views', 'add-list.html'));
});

// tasks/list => POST
router.post('/list', (req, res, next) => {
    console.log('allo');
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;
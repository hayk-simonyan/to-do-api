const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  // res.send('Hello World!');
  res.render('index', { title: 'ToDo List' });
});

module.exports = router; 

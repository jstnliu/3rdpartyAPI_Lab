const express = require('express');
const router = express.Router();
const token = process.env.GITHUB_API_KEY;
const ROOT_URL = 'https://catfact.ninja'

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Cat Facts' });
});

module.exports = router;

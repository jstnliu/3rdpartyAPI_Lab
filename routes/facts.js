const express = require('express');
const router = express.Router();
const factsCtrl = require('../controllers/facts');

//GET /cats/fact
router.get('/', factsCtrl.show);

module.exports = router;

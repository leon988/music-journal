const express = require('express');
const router = express.Router();
const sessionsCtrl = require('../controllers/sessions');
// Require the auth middleware
const ensureLoggedIn = require('../config/ensureLoggedIn');

// router.get('/', sessionsCtrls.index);
// // Use ensureLoggedIn middleware to protect routes
// router.get('/new', ensureLoggedIn, sessionsCtrl.new);
// router.get('/:id', sessionsCtrl.show);
// router.post('/', ensureLoggedIn, sessionsCtrl.create);

module.exports = router;
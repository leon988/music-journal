const express = require('express');
const router = express.Router();
const sessionsCtrl = require('../controllers/sessions');
// const ensureLoggedIn = require('../config/ensureLoggedIn');

// GET /sessions
router.get('/', sessionsCtrl.index);
  
// GET /sessions/new
router.get('/new', sessionsCtrl.new);

// POST /movies
router.post('/', sessionsCtrl.create);

// GET /sessions/:id (show functionality) MUST be below new route
router.get('/:id', sessionsCtrl.show);


module.exports = router;
const express = require('express');
const router = express.Router();
const sessionsCtrl = require('../controllers/sessions');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// GET /sessions
router.get('/', sessionsCtrl.index);
  
// GET /sessions/new
router.get('/new', ensureLoggedIn, sessionsCtrl.new);

// POST /session
router.post('/', ensureLoggedIn, sessionsCtrl.create);

// GET /sessions/:id (show functionality) 
router.get('/:id', sessionsCtrl.show);

// DELETE a session --> /session/:id
router.delete('/:id', ensureLoggedIn, sessionsCtrl.delete);

// PUT /sessions/:id (update functionality)
router.put('/:id', ensureLoggedIn, sessionsCtrl.update);

// GET /sessions/:id/edit 
router.get('/:id/edit', ensureLoggedIn, sessionsCtrl.edit);

module.exports = router;
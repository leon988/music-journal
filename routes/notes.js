var express = require('express');
var router = express.Router();
var noteCtrl = require('../controllers/notes');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// Route to display the note creation form
router.get('/sessions/:id/notes/new', ensureLoggedIn, noteCtrl.new);

// Route to handle note creation form submission
router.post('/sessions/:id/notes', ensureLoggedIn, noteCtrl.create);

// Route to delete a note
router.delete('/notes/:id', noteCtrl.delete);

module.exports = router;
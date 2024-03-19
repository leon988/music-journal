var express = require('express');
var router = express.Router();
var noteCtrl = require('../controllers/notes');

// Route to display the note creation form
router.get('/sessions/:id/notes/new', noteCtrl.new);

// Route to handle note creation form submission
router.post('/sessions/:id/notes', noteCtrl.create);

module.exports = router;
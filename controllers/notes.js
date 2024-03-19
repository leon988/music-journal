const Session = require('../models/sessions');

module.exports = {
  new: newNote,
  create
};

async function newNote(req,res){
  try {
    const sessionId = req.params.id;
    res.render('notes/new', {
      title: 'Add New Note',
      sessionId: sessionId, 
      errorMsg: ''
    });
  } catch(err){
    console.log(err)
  }
};

async function create(req, res) {
  try {
      const session = await Session.findById(req.params.id);
      session.notes.push({
          date: req.body.date,
          rating: req.body.rating,
          content: req.body.content
      });
      await session.save();
      res.redirect(`/sessions/${session._id}`);
  } catch (err) {
      console.log(err);
  }
}
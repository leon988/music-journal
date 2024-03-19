const Session = require('../models/sessions');

module.exports = {
  new: newSession, 
  index, 
  show,
  create,
  delete: deleteSession
};

async function deleteSession(req, res) {
  try {
    // Find the session based on session ID and user ID
    const session = await Session.findOne({ _id: req.params.id, user: req.user._id });
    // If session not found, redirect
    if (!session) {
      return res.redirect('/sessions');
    }
    // Remove the session
    await session.deleteOne();
    // Redirect back to sessions
    res.redirect('/sessions');
  } catch (error) {
    console.error(error);
  }
};

async function show(req,res){
  const session = await Session.findById(req.params.id)
  res.render('sessions/show', {session, title: 'Session Info'})
};

async function index(req, res){
  const sessions = await Session.find({});
  res.render('sessions/index', {title: 'All Practice Sessions', sessions})
};

function newSession(req,res){
  // render the page with a form to create a session
  res.render("sessions/new",{
     title: "Create A New Practice Session", 
     errorMsg: ''
    });
};

async function create (req,res){
  try {
    const { instrument, exercise, duration, technique, date, rating} = req.body;
    const newSession = new Session({
      instrument,
      exercise,
      duration,
      technique,
      date, 
      rating
    });
    await newSession.save();
    res.redirect('/sessions');
  } catch (error) {
    console.error(error);
  }
};

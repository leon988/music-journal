const Session = require('../models/sessions');

module.exports = {
  new: newSession, 
  index, 
  show,
  create
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

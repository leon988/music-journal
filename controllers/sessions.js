const Session = require('../models/sessions');

module.exports = {
  new: newSession, 
  index, 
  show,
  create,
  delete: deleteSession,
  update, 
  edit
};

async function update(req, res){
  try {
    const session = await Session.findByIdAndUpdate(req.params.id, req.body);
    res.redirect(`/sessions/${session._id}`)
  } catch (error) {
    console.error(error);
  }
};

async function edit(req, res){
  try {
    const session = await Session.findById(req.params.id);
    res.render('sessions/edit', {  title: 'Edit Session', session });
  } catch (error) {
    console.error(error);
  }
};


async function deleteSession(req, res) {
  try {
    const session = await Session.findByIdAndDelete(req.params.id)
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

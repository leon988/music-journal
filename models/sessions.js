const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const notesSchema = new Schema ({
  date: {
    type: Date
  },
  rating: {
    type: String,
    enum: ['1 😕 ','2 😐','3 🙂','4 😊','5 🌟'],
    require: true
  },
  content: {
    type: String,
    required: true
  }
});

const sessionSchema = new Schema({
  instrument:  { 
    type: String, 
    enum: ['Piano 🎹', 'Guitar 🎸', 'Violin 🎻', 'Drum 🥁', 'Saxophone 🎷', 'Flute 🎶'],
    required: true 
  }, 
  exercise: {
    type: String,
    required: true
  },
  duration: {
    type: Number,
    default: function() {
      return Date.now()
    }
  },
  date: {
    type: Date
  },
  rating: {
    type: String,
    enum: ['1 😕 ','2 😐','3 🙂','4 😊','5 🌟'],
    require: true
  },
  notes: [notesSchema],
});


module.exports = mongoose.model('Session', sessionSchema);
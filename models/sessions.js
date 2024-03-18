const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const notesSchema = new Schema ({
  content: {
    type: String,
    required: true
  },
  date: {
    type: Number,
    default: () => new Date()
  },
  rating: {
    type: String,
    enum: ['1 😕 ','2 😐','3 🙂','4 😊','5 🌟'],
    require: true
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
  technique: {
    type: String
  },
  date: {
    type: Date
    // default: function() {
    //   return new Date().getFullYear();
    // },
  },
  rating: {
    type: String,
    enum: ['1 😕 ','2 😐','3 🙂','4 😊','5 🌟'],
    require: true
  },
  note: [notesSchema],
});


module.exports = mongoose.model('Session', sessionSchema);
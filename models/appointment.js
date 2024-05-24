const mongoose = require('mongoose')

// Define the schema
const appointmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  residence: {
    type: String,
  },
  reason: {
    type: String,
  },
  date: {
    type: Date,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  APP_ID: {
    type: String,
    required: true,
  },
  STATUS:{
    type:String,
    enum: ['PENDING', 'ACCEPTED', 'DISMISSED', 'RESCHEDULED'],
    required:true
  }
});
 
// Create the model
const Appointment = mongoose.models.Appointment || mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;

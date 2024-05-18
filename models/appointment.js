const mongoose = require('mongoose');

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
    required: true,
  },
  reason: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Create the model
const Appointment = mongoose.models.Appointment || mongoose.model('Appointment', appointmentSchema);

// Export the model
module.exports = Appointment;
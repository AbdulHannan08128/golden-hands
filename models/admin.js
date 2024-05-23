const mongoose = require('mongoose')

// Define the schema
const adminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  number: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  role: {
    type: String, 
    enum: ['ADMINISTRATOR', 'OPERATOR'],
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  session_token:{
    type:String
  }

});

// Create the model
const Admin = mongoose.models.Admin || mongoose.model('Admin', adminSchema);

// Export the model


module.exports = Admin;

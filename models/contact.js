const mongoose = require('mongoose');

// Define the schema
const contactSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  number: {
    type: String,
  },
  message: {
    type: String,
  },
  time: {
    type: String,
  },
  
});

// Create the model
const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema);

// Export the model
module.exports = Contact;

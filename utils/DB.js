// utils/db.js
import mongoose from 'mongoose';

const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true, 
      useUnifiedTopology: true,
    }); 
   
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  } 
};

export default connectToDatabase;

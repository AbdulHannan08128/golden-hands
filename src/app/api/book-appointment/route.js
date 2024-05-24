import { NextResponse } from "next/server";
import connectToDatabase from '../../../../utils/DB';
import Appointment from '../../../../models/appointment'
await connectToDatabase().then(console.log('DATABASE CONNECTED --@BOOK-APPOINTMENT'));

export async function POST(req){
  const appointmentDetails = await req.json();
  const APP_ID ='#'+ Date.now().toString() + (Math.floor(Math.random())*1000).toString();
  const newAppointmentDetails = {...appointmentDetails, APP_ID:APP_ID, STATUS:'PENDING'}
  try {
    const newAppointment = new Appointment(newAppointmentDetails);
    await newAppointment.save();
    console.log('Appointment Booked Successfully');
    return NextResponse.json({status:200, APP_ID:APP_ID});
  } catch (error) {
    return NextResponse.json({status:500}); 
  }
  
}
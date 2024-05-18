import { NextResponse } from "next/server";
import connectToDatabase from '../../../../utils/DB';
import Appointment from '../../../../models/appointment'
await connectToDatabase().then(console.log('DATABASE CONNECTED --@BOOK-APPOINTMENT'));

export async function POST(req){
  const appointmentDetails = await req.json();
  try {
    const newAppointment = new Appointment(appointmentDetails);
    await newAppointment.save();
    console.log('Appointment Booked Successfully');
    return NextResponse.json({status:200});
  } catch (error) {
    return NextResponse.json({status:500}); 
  }
  
}
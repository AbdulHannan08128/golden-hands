import { NextResponse } from "next/server";
import connectToDatabase from '../../../../utils/DB';

await connectToDatabase().then(console.log('DATABASE CONNECTED --@TRACK-APPOINTMENT'));

import Appointment from '../../../../models/appointment';

export async function POST(req) {
  const appointmentDetails = await req.json();
  const findedAppointments = await Appointment.find({APP_ID:appointmentDetails?.APP_ID, password:appointmentDetails?.password});
  console.log(findedAppointments);
  return NextResponse.json({ status: 200, appointments:findedAppointments });
}
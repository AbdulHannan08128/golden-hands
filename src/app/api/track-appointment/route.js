import { NextResponse } from "next/server";
import connectToDatabase from '../../../../utils/DB';
await connectToDatabase().then(console.log('DATABASE CONNECTED --@TRACK-APPOINTMENT'));

export async function POST(req) {
  const appointmentDetails = await req.json();
  console.log(appointmentDetails);
  return NextResponse.json({ status: 200 });
}
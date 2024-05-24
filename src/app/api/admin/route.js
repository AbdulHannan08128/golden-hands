import { NextResponse } from "next/server";

import connectToDatabase from '../../../../utils/DB'
await connectToDatabase().then(console.log('DATABASE CONNECTED --@ADMIN'));
import Appointment from '../../../../models/appointment';
import Contact from '../../../../models/contact'
import Admin from '../../../../models/admin'

const GET_APPOINTMENTS = async () =>{
  const APPOINTMENTS = await Appointment.find({});
  return APPOINTMENTS;
}
const GET_CONTACTS = async () =>{
  const CONTACTS = await Contact.find({});
  return CONTACTS;
}
const GET_ADMINS = async () =>{
  const ADMINS = await Admin.find({});
  return ADMINS;
}

export async function POST(){
   const APPOINTMENTS = await GET_APPOINTMENTS();
   const CONTACTS = await GET_CONTACTS();
   const ADMINS = await GET_ADMINS();
    return NextResponse.json({status:200, APPOINTMENTS:APPOINTMENTS, CONTACTS:CONTACTS, ADMINS:ADMINS});
}
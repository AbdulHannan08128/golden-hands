import { NextResponse } from "next/server";
import connectToDatabase from '../../../../utils/DB';
await connectToDatabase().then(console.log('DATABASE CONNECTED --@CONTACT'));
import Contact from '../../../../models/contact'
export async function POST(req){
  const contactDetails = await req.json();
  try {
    const newContact = new Contact(contactDetails);
    await newContact.save();
    console.log('Contacted Successfully');
    return NextResponse.json({status:200});
  } catch (error) {
    return NextResponse.json({status:500}); 
  }
}
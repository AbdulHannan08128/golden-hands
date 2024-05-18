import { NextResponse } from "next/server";
import connectToDatabase from '../../../../utils/DB';
await connectToDatabase().then(console.log('DATABASE CONNECTED --@CONTACT'));

export async function POST(req){
  const contactDetails = await req.json();
  console.log(contactDetails);
  return NextResponse.json({status:200});
}
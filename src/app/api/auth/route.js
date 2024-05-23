import { NextResponse } from "next/server";
import connectToDatabase from '../../../../utils/DB';
await connectToDatabase().then(console.log('DATABASE CONNECTED --@AUTH'));
import Admin  from '../../../../models/admin';


const generateSessionToken = () =>{
  const session_token = 'admin'+(Math.floor(Math.random()*1000000000)).toString();
  return session_token;
}

export async function POST(req) {
  const details = await req.json();
  let { email, password } = details;
  const ADMINS = await Admin.find({ email: email, password: password});
 
  if (ADMINS?.length == 1) {
    return NextResponse.json({ status: 200, login: true, ADMIN: ADMINS[0] });
  }else{
    return NextResponse.json({ status: 201, login: false, ADMIN: null });
  }
}
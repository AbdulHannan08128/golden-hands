import { NextResponse } from "next/server";

await connectToDatabase();

export async function POST(req){
  const contactDetails = await req.json();
  console.log(contactDetails);
  return NextResponse.json({status:200});
}
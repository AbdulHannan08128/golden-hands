import { NextResponse } from "next/server";

await connectToDatabase();

export async function POST(req) {
  const appointmentDetails = await req.json();
  console.log(appointmentDetails);
  return NextResponse.json({ status: 200 });
}
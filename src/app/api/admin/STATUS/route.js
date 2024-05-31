import { NextResponse } from "next/server";
import connectToDatabase from '../../../../../utils/DB';
import Appointment from '../../../../../models/appointment';

export async function POST(req) {
    const data = await req.json();
    // console.log(data);

    try {
        // Connect to the database
        await connectToDatabase().then(() => console.log('DATABASE CONNECTED --@STATUS'));

        // Update documents based on incoming data
        const filter = { _id: { $in: data.map(entry => entry._id) } }; // Match documents by _id
        for (const entry of data) {
            const update = { $set: { STATUS: entry.STATUS } }; // Define the update operation for each entry
            await Appointment.updateOne({ APP_ID: entry.APP_ID }, update);
        }
    } catch (error) {
        // Handle errors
        console.error(error);
        return NextResponse.json({ status: 500, message: 'Internal Server Error' });
    } finally {
        return NextResponse.json({ status: 200, message: 'Update successful' });
    }
}

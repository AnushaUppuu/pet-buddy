import mongoose from 'mongoose';
import * as dotenv from "dotenv";
dotenv.config();
export async function DatabaseConnection() {
 console.log("entered")
  try {
    await mongoose.connect(`mongodb+srv://anushauppu:YzV84hrtsOm9Sr9C@cluster0.fsn9l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);
    console.log('Connected to the database');
  } catch (e) {
    console.log(e);
    throw new Error("Unable to connect");
  }
}

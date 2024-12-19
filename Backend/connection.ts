import mongoose from 'mongoose';

export async function connection() {
  try {
    await mongoose.connect(`mongodb+srv://anushauppu:YzV84hrtsOm9Sr9c@cluster0.fsn9l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);
    console.log('Connected to the database');
  } catch (e) {
    console.log('Unable to connect');
  }
}
export async function closeConnection() {
  await mongoose.connection.close();
}
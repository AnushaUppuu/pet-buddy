import mongoose from 'mongoose';

export async function connection() {
  try {
    await mongoose.connect('mongodb://localhost:27017/PetBuddy-2');
    console.log('Connected to the database');
  } catch (e) {
    console.log('Unable to connect');
  }
}
export async function closeConnection() {
  await mongoose.connection.close();
}
import mongoose, {model} from 'mongoose';

const userSChema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  email_address: {
    type: String,
  },
  phone_number: {
    type: String,
  },
  profile_picture: {
    type: String,
  },
  address:{
    type:String,
  }
});
export const user = model('user', userSChema);

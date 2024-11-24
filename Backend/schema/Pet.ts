import mongoose from 'mongoose';
import {ActivitySchema} from './Activity';
import {Remainder} from './Remainder';

const PetSchema = new mongoose.Schema({
  name: {type: String},
  age: {type: String},
  weight: {type: String},
  height: {type: String},
  color: {type: String},
  remarks: {type: String},
  owner: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'user',
  },
  gender: {type: String},
  category: {type: String},
  breed: {type: String},
  emergencyContact: {type: String},
  activity: [{type: ActivitySchema}],
  remainders: [{type: Remainder}],
  profileImage:{type:String},
  gallery: [{type: String}],
});

import mongoose from "mongoose";

export const ActivitySchema=new mongoose.Schema({
    name:{type:String},
    timePeriod:{type:String}
})
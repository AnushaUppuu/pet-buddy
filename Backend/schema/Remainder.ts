import mongoose from "mongoose";

export const Remainder=new mongoose.Schema({
    name:{type:String},
    category:{type:String},
    fromHour:{type:Number},
    fromMinute:{type:String},
    toHour:{type:Number},
    toMinute:{type:Number}
})
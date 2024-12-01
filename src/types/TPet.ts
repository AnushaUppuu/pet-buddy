import { TActivity } from "./TActivity"
import { TRemainder } from "./TRemainder"

export type TPet={
    name:String,
    age:String,
    weight:String,
    height:String,
    color:String,
    breed:String,
    petImage:String,
    emergencyContact:String,
    remarks?:String,
    gender:String,
    category:String,
    activity?:[TActivity],
    remainder?:[TRemainder],
    gallery?:[String]
}
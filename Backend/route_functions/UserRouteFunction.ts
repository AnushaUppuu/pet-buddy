import express, {Request,Response} from 'express'
import { user } from '../schema/User'
export const createUser=async(req:Request,res:Response):Promise<any>=>{
    try{
        const searchUser=await user.findOne({username:req.body.username});
        if(searchUser){
            await user.create(req.body);
            res.status(200).send("User successfully added");
        }else{
            res.status(202).send("Username already exists");
        }
    }catch(e){
        res.status(500).send("Error while creation")
    }
}
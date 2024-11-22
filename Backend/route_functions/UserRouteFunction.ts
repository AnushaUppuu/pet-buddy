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
export const getSingleUser=async(req:Request,res:Response):Promise<any>=>{
    const {username}=req.params;
   try{
     const searchUser=await user.findOne({username:username});
     if(searchUser){
        res.status(200).json(searchUser);
     }else{
        res.status(404).send("User not found");
     }
   }catch(e){
    res.status(500).send("Database error");
   }
}
export const loginUser=async(req:Request,res:Response):Promise<any>=>{
    try{
        const searchUser=await user.findOne({$and:[{username:req.body.username},{password:req.body.password}]})
        if(searchUser){
            res.status(200).send("Login successfully");
        }else{
            res.status(404).send("User not found");
        }
    }catch(e){
        res.status(500).send("Database error");
    }
}
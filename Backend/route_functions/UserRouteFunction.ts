import express, {Request,Response} from 'express'
import { user } from '../schema/User'
export const createUser=async(req:Request,res:Response):Promise<any>=>{
    try{
        console.log(req.body);
        const searchUser=await user.findOne({username:req.body.username});
        if(searchUser){
            res.status(202).send("Username already exists");
        }else{
           
            await user.create(req.body);
            console.log("Created");
            res.status(200).send("User successfully added");
        }
    }catch(e){
        console.log(e);
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
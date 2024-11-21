import express, {Request,Response} from 'express'
export const createUser=async(req:Request,res:Response):Promise<any>=>{
    res.send("Create user route")
}
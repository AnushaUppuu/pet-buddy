import express from 'express'
import { createUser, getSingleUser } from '../../Backend/route_functions/UserRouteFunction';
import request from 'supertest'
const app=express();
jest.mock('../../Backend/route_functions/UserRouteFunction',()=>({
    createUser:jest.fn(),
    getSingleUser:jest.fn(),
}))
app.post('/users/register',createUser);
app.get('/users/getSingleUser',getSingleUser);
describe("create user",()=>{
    it("Should return the success when the user created",async()=>{
        (createUser as jest.Mock).mockImplementation((req,res)=>{
            res.status(200).send("User successfully added");
        })
        const result =await request(app).post('/users/register');
        expect(result.status).toBe(200);
        expect(result.text).toBe("User successfully added");
    })
    it("Should return the error when the user not created cause of error",async()=>{
        (createUser as jest.Mock).mockImplementation((req,res)=>{
            res.status(500).send("Error while creation");
        })
        const result =await request(app).post('/users/register');
        expect(result.status).toBe(500);
        expect(result.text).toBe("Error while creation");
    })
    it("Should return the error message when the user with the same username already exists",async()=>{
        (createUser as jest.Mock).mockImplementation((req,res)=>{
            res.status(202).send("Username already exists");
        })
        const result =await request(app).post('/users/register');
        expect(result.status).toBe(202);
        expect(result.text).toBe("Username already exists");
    })
})
describe("get single user",()=>{
    it("should return the details of the user when the user found",async()=>{
        const value={
            username:"Anusha",
            emal:"anusha@gmail.com"
        };
        (getSingleUser as jest.Mock).mockImplementation((req,res)=>{
            res.status(200).json(value);
        });
        const result=await request(app).get('/users/getSingleUser');
        expect(result.status).toBe(200);
        expect(result.body).toEqual(value);
    })
    it("should return the error message when the not user found",async()=>{
      
        (getSingleUser as jest.Mock).mockImplementation((req,res)=>{
            res.status(404).send("User not found");
        });
        const result=await request(app).get('/users/getSingleUser');
        expect(result.status).toBe(404);
        expect(result.text).toBe("User not found");
    })
    it("should return the error message when the error occurs while finding the user",async()=>{
      
        (getSingleUser as jest.Mock).mockImplementation((req,res)=>{
            res.status(500).send("Database error");
        });
        const result=await request(app).get('/users/getSingleUser');
        expect(result.status).toBe(500);
        expect(result.text).toBe("Database error");
    })
})
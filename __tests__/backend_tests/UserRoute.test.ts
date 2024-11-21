import express from 'express'
import { createUser } from '../../Backend/route_functions/UserRouteFunction';
import request from 'supertest'
const app=express();
jest.mock('../../Backend/route_functions/UserRouteFunction',()=>({
    createUser:jest.fn(),
}))
app.post('/users/register',createUser)
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
import { app } from "../../Backend/server";
import express from 'express';
import request from 'supertest';
import { createPet } from "../../Backend/route_functions/PetRouteFunctions";
jest.mock('../../Backend/route_functions/PetRouteFunctions',()=>({
    createPet:jest.fn(),
}))
describe("Create pet route",()=>{
    it("Should return success message upon adding pet to the database successfully",async()=>{
        (createPet as jest.Mock).mockImplementation((req,res)=>{
            res.status(200).send("Pet added successfully")
        })
        const result=await request(app).post('/pets/addPet').send({});
        expect(result.status).toBe(200);
        expect(result.text).toBe("Pet added successfully");
    });
    it("Should return error message when error occurs",async()=>{
        (createPet as jest.Mock).mockImplementation((req,res)=>{
            res.status(500).send("Error while creating")
        })
        const result=await request(app).post('/pets/addPet').send({});
        expect(result.status).toBe(500);
        expect(result.text).toBe("Error while creating");
    });
    it("Should return error message when the pet exists",async()=>{
        (createPet as jest.Mock).mockImplementation((req,res)=>{
            res.status(201).send("Pet exists")
        })
        const result=await request(app).post('/pets/addPet').send({});
        expect(result.status).toBe(201);
        expect(result.text).toBe("Pet exists");
    });
    it("Should return error message when the user not found",async()=>{
        (createPet as jest.Mock).mockImplementation((req,res)=>{
            res.status(404).send("User not found")
        })
        const result=await request(app).post('/pets/addPet').send({});
        expect(result.status).toBe(404);
        expect(result.text).toBe("User not found");
    });
})
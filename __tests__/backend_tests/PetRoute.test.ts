import { app } from "../../Backend/server";
import express from 'express';
import request from 'supertest';
import { createPet, getAllPets, getSinglePet } from "../../Backend/route_functions/PetRouteFunctions";
jest.mock('../../Backend/route_functions/PetRouteFunctions',()=>({
    createPet:jest.fn(),
    getAllPets:jest.fn(),
    getSinglePet:jest.fn(),
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
describe("Get all pets",()=>{
    it("Should return the pets data",async()=>{
        const value=[
            {
                name:"Cooper",
                weight:4,
            }
        ];
        (getAllPets as jest.Mock).mockImplementation((req,res)=>{
            res.status(200).json(value);
        })
        const result=await request(app).get('/pets/getAllPets/Anusha_uppu');
        expect(result.status).toBe(200);
        expect(result.body).toEqual(value)
    })
    it("Should return the error message when an error occurs",async()=>{
        (getAllPets as jest.Mock).mockImplementation((req,res)=>{
            res.status(500).send("Database error");
        })
        const result=await request(app).get('/pets/getAllPets/Anusha_uppu');
        expect(result.status).toBe(500);
        expect(result.text).toBe("Database error")
    })
    it("Should return the error message when an error occurs",async()=>{
        (getAllPets as jest.Mock).mockImplementation((req,res)=>{
            res.status(404).send("User not found");
        })
        const result=await request(app).get('/pets/getAllPets/Anusha_uppu');
        expect(result.status).toBe(404);
        expect(result.text).toBe("User not found")
    })
})
describe("Get single Pet",()=>{
    it("return the pet data",async()=>{
        const value={
            name:"Cooper",
            age:"4yrs"
        };
        (getSinglePet as jest.Mock).mockImplementation((req,res)=>{
            res.status(200).json(value);
        })
        const result=await request(app).get('/pets/getSinglePet/Anusha_uppu/Cooper');
        expect(result.status).toBe(200);
        expect(result.body).toEqual(value);
    })
    it("return database error when error occurs",async()=>{
        (getSinglePet as jest.Mock).mockImplementation((req,res)=>{
            res.status(500).send("Database error")
        })
        const result=await request(app).get('/pets/getSinglePet/Anusha_uppu/Cooper');
        expect(result.status).toBe(500);
        expect(result.text).toBe("Database error")
    })
    it("return error message when user not found",async()=>{
        (getSinglePet as jest.Mock).mockImplementation((req,res)=>{
            res.status(404).send("User not found")
        })
        const result=await request(app).get('/pets/getSinglePet/Anusha_uppu/Cooper');
        expect(result.status).toBe(404);
        expect(result.text).toBe("User not found")
    })
    it("return error message when pet not found",async()=>{
        (getSinglePet as jest.Mock).mockImplementation((req,res)=>{
            res.status(400).send("Pet not found")
        })
        const result=await request(app).get('/pets/getSinglePet/Anusha_uppu/Cooper');
        expect(result.status).toBe(400);
        expect(result.text).toBe("Pet not found")
    })
})
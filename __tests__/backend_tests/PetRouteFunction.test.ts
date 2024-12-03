import {addActivity, addRemainder, createPet, getAllPets, getSinglePet} from '../../Backend/route_functions/PetRouteFunctions';
import {user} from '../../Backend/schema/User';
import mongoose from 'mongoose';
jest.mock('../../Backend/schema/User', () => ({
  user: {
    findOne: jest.fn(),
    create: jest.fn(),
  },
}));
import {pet} from '../../Backend/schema/Pet';
jest.mock('../../Backend/schema/Pet', () => ({
  pet: {
    findOne: jest.fn(),
    create: jest.fn(),
    find:jest.fn(),
    updateOne:jest.fn(),
  },
}));
import express, {Request, Response} from 'express';
import request from 'supertest';
import {app} from '../../Backend/server';

describe('Create pet function', () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let mockSend: jest.Mock;

  beforeEach(() => {
    mockSend = jest.fn();
    mockResponse = {status: jest.fn().mockReturnThis(), send: mockSend};
  });
  it('return success message', async () => {
    (user.findOne as jest.Mock).mockResolvedValue({
      username: 'Anusha_uppu',
      _id: '67323b83a5f27aaf2c36f511',
    });
    (pet.findOne as jest.Mock).mockReturnValue(null);
    (pet.create as jest.Mock).mockReturnValue(null);
    mockRequest = {
      body: {username: 'Anusha_uppu', name: 'Fluffy'},
    };
    await createPet(mockRequest as Request, mockResponse as Response);

    expect(mockResponse.status).toHaveBeenCalledWith(200);
    expect(mockSend).toHaveBeenCalledWith('Pet successfully added');
  });
  it('return error', async () => {
    (user.findOne as jest.Mock).mockResolvedValue(null);
    (pet.findOne as jest.Mock).mockReturnValue(null);
    (pet.create as jest.Mock).mockReturnValue(null);
    mockRequest = {
      body: {username: 'Anusha_uppu', name: 'Fluffy'},
    };
    await createPet(mockRequest as Request, mockResponse as Response);

    expect(mockResponse.status).toHaveBeenCalledWith(404);
    expect(mockSend).toHaveBeenCalledWith('User not exist');
  });
  it('return error', async () => {
    (user.findOne as jest.Mock).mockResolvedValue({
      username: 'Anusha_uppu',
      _id: '67323b83a5f27aaf2c36f511',
    });
    (pet.findOne as jest.Mock).mockReturnValue({name: 'Fluffy'});
    (pet.create as jest.Mock).mockReturnValue(null);
    mockRequest = {
      body: {username: 'Anusha_uppu', name: 'Fluffy'},
    };
    await createPet(mockRequest as Request, mockResponse as Response);

    expect(mockResponse.status).toHaveBeenCalledWith(201);
    expect(mockSend).toHaveBeenCalledWith('Pet already exist');
  });
  it('return error', async () => {
    (user.findOne as jest.Mock).mockResolvedValue({
      username: 'Anusha_uppu',
      _id: '67323b83a5f27aaf2c36f511',
    });
    (pet.findOne as jest.Mock).mockReturnValue(null);
    (pet.create as jest.Mock).mockRejectedValue({})
  
    mockRequest = {
      body: {username: 'Anusha_uppu', name: 'Fluffy'},
    };
    await createPet(mockRequest as Request, mockResponse as Response);

    expect(mockResponse.status).toHaveBeenCalledWith(500);
    expect(mockSend).toHaveBeenCalledWith('Error while creating');
  });
});
describe("Get all pets route function",()=>{
    let mockRequest: Partial<Request>;
    let mockResponse: Partial<Response>;
    let mockSend: jest.Mock;
    let mockBody:jest.Mock;
  
    beforeEach(() => {
      mockSend = jest.fn();

      mockResponse = {status: jest.fn().mockReturnThis(), send: mockSend};
    });
    it("Return the success message ",async()=>{
        (user.findOne as jest.Mock).mockReturnValue({name:"Anusha_uppu",id:"123"});
        (pet.find as jest.Mock).mockReturnValue({});
        mockRequest = {
            body: {},
            params:{username:"Anusha_uppu"}
          };
          await getAllPets(mockRequest as Request, mockResponse as Response);
          expect(mockResponse.status).toHaveBeenCalledWith(200);
      

    })
    it("Return the error message ",async()=>{
      (user.findOne as jest.Mock).mockReturnValue({username:"Anusha"});
      (pet.find as jest.Mock).mockReturnValue({});
      mockRequest = {
          body: {},
          params:{username:"Anusha_uppu"}
        };
        await getAllPets(mockRequest as Request, mockResponse as Response);
        expect(mockResponse.status).toHaveBeenCalledWith(500);
        expect(mockSend).toHaveBeenCalledWith('Database error');
  })
  it("Return the error message ",async()=>{
    (user.findOne as jest.Mock).mockReturnValue(null);
    (pet.find as jest.Mock).mockReturnValue({});
    mockRequest = {
        body: {},
        params:{username:"Anusha_uppu"}
      };
      await getAllPets(mockRequest as Request, mockResponse as Response);
      expect(mockResponse.status).toHaveBeenCalledWith(404);
      expect(mockSend).toHaveBeenCalledWith('User not found');
})
})
describe("Get single pet",()=>{
  let mockRequest:Partial<Request>
  let mockResponse:Partial<Response>
  let mockSend:jest.Mock;
  let mockBody:jest.Mock;
  beforeEach(()=>{
   mockSend=jest.fn();
   const value={
    name:"Cooper",
    age:"4yrs"
  };
  mockBody=jest.fn().mockReturnValue(value);
   mockResponse={status:jest.fn().mockReturnThis(),send:mockSend,json:mockBody}

  })
  it("Return the pet",async()=>{
    mockRequest={
      params:{username:"Anusha",petname:"Cooper"}
    };
    const value={
      name:"Cooper",
      age:"4yrs"
    };
    (user.findOne as jest.Mock).mockReturnValue({username:"Anusha",_id:"1234543"});
    (pet.findOne as jest.Mock).mockReturnValue(value)
    await getSinglePet(mockRequest as Request,mockResponse as Response);
    expect(mockResponse.status).toHaveBeenCalledWith(200);
    expect(mockBody).toHaveBeenCalledWith(value);
  })
  it("Return pet not found message",async()=>{
    mockRequest={
      params:{username:"Anusha",petname:"Cooper"}
    };
    (user.findOne as jest.Mock).mockReturnValue({username:"Anusha",_id:"1234543"});
    (pet.findOne as jest.Mock).mockReturnValue(null)
    await getSinglePet(mockRequest as Request, mockResponse as Response);
    expect(mockResponse.status).toHaveBeenCalledWith(400);
    expect(mockSend).toHaveBeenCalledWith("Pet not found")
  })
  it("Return pet not found message",async()=>{
    mockRequest={
      params:{username:"Anusha",petname:"Cooper"}
    };
    (user.findOne as jest.Mock).mockReturnValue(null);
    (pet.findOne as jest.Mock).mockReturnValue(null)
    await getSinglePet(mockRequest as Request, mockResponse as Response);
    expect(mockResponse.status).toHaveBeenCalledWith(404);
    expect(mockSend).toHaveBeenCalledWith("User not found")
  })
  it("Return Database error",async()=>{
    mockRequest={
      params:{username:"Anusha",petname:"Cooper"}
    };
    (user.findOne as jest.Mock).mockReturnValue({username:"Anusha"});
    (pet.findOne as jest.Mock).mockRejectedValue(null)
    await getSinglePet(mockRequest as Request, mockResponse as Response);
    expect(mockResponse.status).toHaveBeenCalledWith(500);
    expect(mockSend).toHaveBeenCalledWith("Database error")
  })
})
describe("Add remainder route function",()=>{
  let mockRequest:Partial<Request>
  let mockResponse:Partial<Response>
  let mockSend:jest.Mock;
  let mockBody:jest.Mock;
  beforeEach(()=>{
   mockSend=jest.fn();
   const value={
    name:"Cooper",
    age:"4yrs"
  };
  mockBody=jest.fn().mockReturnValue(value);
   mockResponse={status:jest.fn().mockReturnThis(),send:mockSend,json:mockBody}

  })
  it("Return the success message",async()=>{
    mockRequest={
       body:{name:"Walking"},
       params:{username:"Anusha_uppu",petname:"Cooper"}
    };
    (user.findOne as jest.Mock).mockReturnValue({username:"Anusha"});
    (pet.findOne as jest.Mock).mockReturnValue({_id:"123"})
    // (pet.updateOne as jest.Mock).mockReturnValue({});
    await addRemainder(mockRequest as Request, mockResponse as Response);
    expect(mockResponse.status).toHaveBeenCalledWith(200)
    expect(mockSend).toHaveBeenCalledWith("Remainder added successfully");
  })
  it("Return the pet not found message",async()=>{
    mockRequest={
       body:{name:"Walking"},
       params:{username:"Anusha_uppu",petname:"Cooper"}
    };
    (user.findOne as jest.Mock).mockReturnValue({username:"Anusha"});
    (pet.findOne as jest.Mock).mockReturnValue(null)
    // (pet.updateOne as jest.Mock).mockReturnValue({});
    await addRemainder(mockRequest as Request, mockResponse as Response);
    expect(mockResponse.status).toHaveBeenCalledWith(201)
    expect(mockSend).toHaveBeenCalledWith("Pet not found");
  })
  it("Return the user not found message",async()=>{
    mockRequest={
       body:{name:"Walking"},
       params:{username:"Anusha_uppu",petname:"Cooper"}
    };
    (user.findOne as jest.Mock).mockReturnValue(null);

    await addRemainder(mockRequest as Request, mockResponse as Response);
    expect(mockResponse.status).toHaveBeenCalledWith(404)
    expect(mockSend).toHaveBeenCalledWith("User not found");
  })
  it("Return the error message",async()=>{
    mockRequest={
       body:{name:"Walking"},
       params:{username:"Anusha_uppu",petname:"Cooper"}
    };
    (user.findOne as jest.Mock).mockReturnValue({username:"Anusha"});
    (pet.findOne as jest.Mock).mockRejectedValue(null)
  
    await addRemainder(mockRequest as Request, mockResponse as Response);
    expect(mockResponse.status).toHaveBeenCalledWith(500)
    expect(mockSend).toHaveBeenCalledWith("Error while adding");
  })
})
describe("Add activity",()=>{
  let mockRequest:Partial<Request>
  let mockResponse:Partial<Response>
  let mockSend:jest.Mock;
  let mockBody:jest.Mock;
  beforeEach(()=>{
   mockSend=jest.fn();
   const value={
    name:"Cooper",
    age:"4yrs"
  };
  mockBody=jest.fn().mockReturnValue(value);
   mockResponse={status:jest.fn().mockReturnThis(),send:mockSend,json:mockBody}

  })
  it("Return the success message",async()=>{
    mockRequest={
       body:{name:"Walking"},
       params:{username:"Anusha_uppu",petname:"Cooper"}
    };
    (user.findOne as jest.Mock).mockReturnValue({username:"Anusha"});
    (pet.findOne as jest.Mock).mockReturnValue({_id:"123"})
    await addActivity(mockRequest as Request, mockResponse as Response);
    expect(mockResponse.status).toHaveBeenCalledWith(200)
    expect(mockSend).toHaveBeenCalledWith("Activity added successfully");
  })
  it("Return the pet not found message",async()=>{
    mockRequest={
       body:{name:"Walking"},
       params:{username:"Anusha_uppu",petname:"Cooper"}
    };
    (user.findOne as jest.Mock).mockReturnValue({username:"Anusha"});
    (pet.findOne as jest.Mock).mockReturnValue(null)
    // (pet.updateOne as jest.Mock).mockReturnValue({});
    await addActivity(mockRequest as Request, mockResponse as Response);
    expect(mockResponse.status).toHaveBeenCalledWith(201)
    expect(mockSend).toHaveBeenCalledWith("Pet not found");
  })
  it("Return the user not found message",async()=>{
    mockRequest={
       body:{name:"Walking"},
       params:{username:"Anusha_uppu",petname:"Cooper"}
    };
    (user.findOne as jest.Mock).mockReturnValue(null);

    await addActivity(mockRequest as Request, mockResponse as Response);
    expect(mockResponse.status).toHaveBeenCalledWith(404)
    expect(mockSend).toHaveBeenCalledWith("User not found");
  })
  it("Return the error message",async()=>{
    mockRequest={
       body:{name:"Walking"},
       params:{username:"Anusha_uppu",petname:"Cooper"}
    };
    (user.findOne as jest.Mock).mockReturnValue({username:"Anusha"});
    (pet.findOne as jest.Mock).mockRejectedValue(null)
  
    await addRemainder(mockRequest as Request, mockResponse as Response);
    expect(mockResponse.status).toHaveBeenCalledWith(500)
    expect(mockSend).toHaveBeenCalledWith("Error while adding");
  })
})
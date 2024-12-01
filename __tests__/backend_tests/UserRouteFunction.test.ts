import {
  createPet,
  getAllPets,
  getSinglePet,
} from '../../Backend/route_functions/PetRouteFunctions';
import {user} from '../../Backend/schema/User';
import mongoose from 'mongoose';
jest.mock('../../Backend/schema/User', () => ({
  user: {
    findOne: jest.fn(),
    create: jest.fn(),
  },
}));
import express, {Request, Response} from 'express';
import request from 'supertest';
import {app} from '../../Backend/server';
import {
  createUser,
  getSingleUser,
  loginUser,
} from '../../Backend/route_functions/UserRouteFunction';

describe('create user', () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let mockSend: jest.Mock;
  beforeEach(() => {
    mockSend = jest.fn();
    mockResponse = {status: jest.fn().mockReturnThis(), send: mockSend};
  });
  it('Return the success', async () => {
    (user.findOne as jest.Mock).mockResolvedValue(null);
    (user.create as jest.Mock).mockResolvedValue({});
    mockRequest = {
      body: {username: 'Anusha_uppu'},
    };
    await createUser(mockRequest as Request, mockResponse as Response);
    expect(mockResponse.status).toHaveBeenCalledWith(200);
    expect(mockSend).toHaveBeenCalledWith('User successfully added');
  });
  it('Return the message user already exists', async () => {
    (user.findOne as jest.Mock).mockResolvedValue({_id: '123'});
    await createUser(mockRequest as Request, mockResponse as Response);
    expect(mockResponse.status).toHaveBeenCalledWith(202);
    expect(mockSend).toHaveBeenCalledWith('Username already exists');
  });
  it('Return the error message', async () => {
    (user.findOne as jest.Mock).mockRejectedValue({});
    await createUser(mockRequest as Request, mockResponse as Response);
    expect(mockResponse.status).toHaveBeenCalledWith(500);
    expect(mockSend).toHaveBeenCalledWith('Error while creation');
  });
});
describe('Get single user', () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let mockSend: jest.Mock;
  let mockBody: jest.Mock;
  beforeEach(() => {
    mockSend = jest.fn();
    mockBody = jest.fn().mockReturnThis();
    mockResponse = {
      status: jest.fn().mockReturnThis(),
      send: mockSend,
      json: mockBody,
    };
  });
  it('return user details', async () => {
    const value = {
      _id: '1',
      username: 'Anusha_uppu',
    };
    (user.findOne as jest.Mock).mockReturnValue(value);
    mockRequest = {
      params: {username: 'Anusha_uppu'},
    };
    await getSingleUser(mockRequest as Request, mockResponse as Response);
    expect(mockResponse.status).toHaveBeenCalledWith(200);
    expect(mockBody).toHaveBeenCalledWith(value);
  });
  it('Return user not found message', async () => {
    (user.findOne as jest.Mock).mockReturnValue(null);
    await getSingleUser(mockRequest as Request, mockResponse as Response);
    expect(mockResponse.status).toHaveBeenCalledWith(404);
    expect(mockSend).toHaveBeenCalledWith('User not found');
  });
  it('Return the error message', async () => {
    (user.findOne as jest.Mock).mockRejectedValue(null);
    await getSingleUser(mockRequest as Request, mockResponse as Response);
    expect(mockResponse.status).toHaveBeenCalledWith(500);
    expect(mockSend).toHaveBeenCalledWith('Database error');
  });
});
describe('Login user', () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let mockSend: jest.Mock;
  let mockBody: jest.Mock;
  beforeEach(() => {
    mockSend = jest.fn();
    mockBody = jest.fn().mockReturnThis();
    mockResponse = {
      status: jest.fn().mockReturnThis(),
      send: mockSend,
      json: mockBody,
    };
  });
  it('Return success message', async () => {
    (user.findOne as jest.Mock).mockReturnValue({_id: '1'});
    mockRequest = {
      body: {
        username: 'Anusha_uppu',
        password: '123',
      },
    };
    await loginUser(mockRequest as Request, mockResponse as Response);
    expect(mockResponse.status).toHaveBeenCalledWith(200);
    expect(mockSend).toHaveBeenCalledWith('Login successfully');
  });
  it('return message user not found', async() => {
    (user.findOne as jest.Mock).mockReturnValue(null);
    mockRequest = {
      body: {
        username: 'Anusha_uppu',
        password: '123',
      },
    };
    await loginUser(mockRequest as Request, mockResponse as Response);
    expect(mockResponse.status).toHaveBeenCalledWith(404);
    expect(mockSend).toHaveBeenCalledWith('User not found');
  });
  it('return error message', async() => {
    (user.findOne as jest.Mock).mockRejectedValue(null);
    mockRequest = {
      body: {
        username: 'Anusha_uppu',
        password: '123',
      },
    };
    await loginUser(mockRequest as Request, mockResponse as Response);
    expect(mockResponse.status).toHaveBeenCalledWith(500);
    expect(mockSend).toHaveBeenCalledWith('Database error');
  });
});

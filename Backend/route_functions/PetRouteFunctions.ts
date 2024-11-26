import express, {Request, Response} from 'express';
import {pet} from '../schema/Pet';
import {user} from '../schema/User';
export const createPet = async (req: Request, res: Response): Promise<any> => {
  try {
    const searchUser = await user.findOne({username: req.body.username});
    if (searchUser) {
      const searchPet = await pet.findOne({
        $and: [{name: req.body.name}, {owner: searchUser._id}],
      });
      if (searchPet) {
        res.status(201).send('Pet already exist');
      } else {
        await pet.create(req.body);
        res.status(200).send('Pet successfully added');
      }
    } else {
      res.status(404).send('User not exist');
    }
  } catch (e) {
    res.status(500).send('Error while creating');
  }
};
export const getAllPets = async (req: Request, res: Response): Promise<any> => {
  const {username} = req.params;
  try {
    const searchUser = await user.findOne({username: username});
    if (searchUser) {
      const result = await pet.find({owner: searchUser._id});
      res.status(200).json(result);
    } else {
      res.status(404).send('User not found');
    }
  } catch (e) {
    res.status(500).send('Database error');
  }
};
export const getSinglePet = async (
  req: Request,
  res: Response,
): Promise<any> => {
  const {username, petname} = req.params;
  try {
    const searchUser = await user.findOne({username: username});
    if (searchUser) {
      const petDetails = await pet.findOne({
        $and: [{name: petname}, {owner: searchUser._id}],
      });
      if (petDetails) {
        res.status(200).json(petDetails);
      } else {
        res.status(400).send('Pet not found');
      }
    } else {
      res.status(404).send('User not found');
    }
  } catch (e) {
    res.status(500).send('Database error');
  }
};

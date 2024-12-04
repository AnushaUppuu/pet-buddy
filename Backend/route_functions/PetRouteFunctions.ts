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
        const value = {
          name: req.body.name,
          age: req.body.age,
          weight: req.body.weight,
          height: req.body.height,
          color: req.body.color,
          remarks: req.body.remarks,
          owner: searchUser._id,
          gender: req.body.gender,
          category: req.body.category,
          breed: req.body.breed,
          emergencyContact: req.body.emergencyContact,
          profileImage: req.body.profileImage,
        };
        await pet.create(value);
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
export const addRemainder = async (
  req: Request,
  res: Response,
): Promise<any> => {
  const {username, petname} = req.params;
  try {
    const searchUser = await user.findOne({username: username});
    if (searchUser) {
      const searchPet = await pet.findOne({
        $and: [{name: petname}, {owner: searchUser._id}],
      });
      if (searchPet) {
        await pet.updateOne(
          {_id: searchPet._id},
          {$push: {remainders: req.body}},
        );
        res.status(200).send('Remainder added successfully');
      } else {
        res.status(201).send('Pet not found');
      }
    } else {
      res.status(404).send('User not found');
    }
  } catch (e) {
    res.status(500).send('Error while adding');
  }
};
export const addActivity = async (
  req: Request,
  res: Response,
): Promise<any> => {
  const {username, petname} = req.params;
  console.log(req.body);
  try {
    const searchUser = await user.findOne({username: username});
    if (searchUser) {
      const searchPet = await pet.findOne({
        $and: [{name: petname}, {owner: searchUser._id}],
      });
      if (searchPet) {
        await pet.updateOne(
          {_id: searchPet._id},
          {$push: {activity: req.body}},
        );
        res.status(200).send('Activity added successfully');
      } else {
        res.status(201).send('Pet not found');
      }
    } else {
      res.status(404).send('User not found');
    }
  } catch (e) {
    res.status(500).send('Error while adding');
  }
};

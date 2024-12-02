import express from 'express';
import { addActivity, addRemainder, createPet, getAllPets, getSinglePet } from '../route_functions/PetRouteFunctions';
const router=express.Router();
router.post('/addPet',createPet);
router.get('/getAllPets/:username',getAllPets);
router.get('/getSinglePet/:username/:petname',getSinglePet);
router.post('/addRemainder/:username/:petname',addRemainder);
router.post('/addActivity/:username/:petname',addActivity);
export default router
import express from 'express';
import { createPet, getAllPets, getSinglePet } from '../route_functions/PetRouteFunctions';
const router=express.Router();
router.post('/addPet',createPet);
router.get('/getAllPets/:username',getAllPets);
router.get('/getSinglePet/:username/:petname',getSinglePet);
export default router
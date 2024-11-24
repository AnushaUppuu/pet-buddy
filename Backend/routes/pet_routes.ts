import express from 'express';
import { createPet, getAllPets } from '../route_functions/PetRouteFunctions';
const router=express.Router();
router.post('/addPet',createPet);
router.get('/getAllPets/:username',getAllPets);
export default router
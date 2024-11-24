import express from 'express';
import { createPet } from '../route_functions/PetRouteFunctions';
const router=express.Router();
router.post('/addPet',createPet);
export default router
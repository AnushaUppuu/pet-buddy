import express from 'express';
import { createUser, getSingleUser } from '../route_functions/UserRouteFunction';
const router=express.Router();
router.post('/register',createUser);
router.get('/getSingleUser/:username',getSingleUser);
export default router
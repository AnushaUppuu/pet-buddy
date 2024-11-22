import express from 'express';
import { createUser, getSingleUser, loginUser } from '../route_functions/UserRouteFunction';
const router=express.Router();
router.post('/register',createUser);
router.get('/getSingleUser/:username',getSingleUser);
router.post('/login',loginUser);
export default router
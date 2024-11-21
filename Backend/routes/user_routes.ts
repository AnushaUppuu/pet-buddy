import express from 'express';
import { createUser } from '../route_functions/UserRouteFunction';
const router=express.Router();
router.post('/register',createUser);
export default router
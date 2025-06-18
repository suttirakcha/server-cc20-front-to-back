import express from "express";

// Import controllers
import { deleteUser, getUsers, updateRoleUser, readUser, createUser } from "../controllers/user.controller";

const router = express.Router();

// http://localhost:8000/api
router.get('/users', getUsers);
router.get('/user', readUser);
router.post('/user', createUser);
router.patch('/user/role/:id', updateRoleUser);
router.delete('/user/:id', deleteUser);

// Export
export default router;
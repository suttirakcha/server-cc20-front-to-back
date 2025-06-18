import express from "express";

// Import controllers
import { login, register } from "../controllers/auth.controller";

const router = express.Router();

// http://localhost:8000/auth
router.post('/register', register);
router.post('/login', login);

export default router;
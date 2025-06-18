import express from "express";

// Import controllers
import { login, register } from "../controllers/auth.controller";
import { loginSchema, registerSchema, validate } from "../validations/validator";

const router = express.Router();

// http://localhost:8000/auth
router.post("/register", validate(registerSchema), register);
router.post("/login", validate(loginSchema), login);

export default router;

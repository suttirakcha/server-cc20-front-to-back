import express from "express";

// Import controllers
import {
  deleteUser,
  getUsers,
  updateRoleUser,
  readUser,
  createUser,
} from "../controllers/user.controller";
import { authCheck } from "../middlewares/auth.middleware";

const router = express.Router();

// http://localhost:8000/api
router.get("/users", authCheck, getUsers);
router.get("/user", authCheck, readUser);
router.post("/user", authCheck, createUser);
router.patch("/user/role/:id", authCheck, updateRoleUser);
router.delete("/user/:id", authCheck, deleteUser);

// Export
export default router;

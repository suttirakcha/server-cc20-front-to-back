import { type NextFunction, type Request, type Response } from "express";
import type { AuthCheckRequest } from "../utils/types";
import prisma from "../config/prisma";

export const getUsers = async (
  req: AuthCheckRequest,
  res: Response,
  next: NextFunction
) => {
  // write code body
  try {
    // Check email
    const user = await prisma.user.findMany({
      omit: {
        password: true
      }
    });
    res.json({ message: "THIS IS GET ALL users", result: user });
  } catch (err) {
    next(err);
  }
};

export const readUser = async (
  req: AuthCheckRequest,
  res: Response,
  next: NextFunction
) => {
  // write code body
  try {
    res.json({ message: "THIS IS GET a user" });
  } catch (err) {
    next(err);
  }
};

export const createUser = async (
  req: AuthCheckRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json({ message: "THIS IS POST a user" });
  } catch (err) {
    next(err);
  }
};

export const updateRoleUser = async (
  req: AuthCheckRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const { role } = req.body;
    const parsedId = parseInt(id);
    
    const user = await prisma.user.update({
      where: { id: parsedId },
      data: {
        id: parsedId,
        role
      }
    })

    res.json({ message: `User updated`, result: user });
  } catch (err) {
    next(err);
  }
};

export const deleteUser = async (
  req: AuthCheckRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    res.json({ message: `THIS IS DELETE of a user ${id}` });
  } catch (err) {
    next(err);
  }
};

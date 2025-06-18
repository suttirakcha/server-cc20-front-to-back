import { type Request, type Response } from "express";

export const getUsers = (req: Request, res: Response) => {
  // write code body
  res.json({ message: "THIS IS GET ALL users" });
};

export const readUser = (req: Request, res: Response) => {
  // write code body
  res.json({ message: "THIS IS GET a user" });
};

export const createUser = (req: Request, res: Response) => {
  res.json({ message: "THIS IS POST a user" });
};

export const updateRoleUser = (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({ message: `THIS IS PATCH of a user ${id}` });
};

export const deleteUser = (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({ message: `THIS IS DELETE of a user ${id}` });
};

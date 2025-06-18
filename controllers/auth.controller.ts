import { type Request, type Response } from "express";

export const register = (req: Request, res: Response) => {
  // write code body
  res.json({ message: "THIS IS register" });
};

export const login = (req: Request, res: Response) => {
  // write code body
  res.json({ message: "THIS IS login" });
};
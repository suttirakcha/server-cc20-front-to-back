import { type Request, type Response, type NextFunction } from "express";

export const authCheck = (req: Request, res: Response, next: NextFunction) => {
  // write code body

  if (true) {
    console.log("This is middleware");
    next();
  }
};

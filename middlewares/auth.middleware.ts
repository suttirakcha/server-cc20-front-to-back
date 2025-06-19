import { type Response, type NextFunction } from "express";
import jwt, { type Secret } from "jsonwebtoken";
import { createError } from "../utils/createError";
import type { AuthCheckRequest } from "../utils/types";

export const authCheck = (req: AuthCheckRequest, res: Response, next: NextFunction) => {
  // write code body
  try {
    /* 
      1. Check headers
      2. Split token
      3. Verify JWT
      4. Create req.user
    */

    // 1. Check headers
    const authHeaders = req.headers.authorization;
    if (!authHeaders){
      createError(401, "Token is missing");
    }

    // 2. Split token
    const token = authHeaders?.split(" ")[1];

    // 3. Verify JWT
    jwt.verify(token!, process.env.JWT_SECRET as Secret, (error, decode) => {
      if (error){
        createError(401, "Token is invalid");
      }

      req.user = decode;
      next()
    });

  } catch (error) {
    next(error);
  }
};

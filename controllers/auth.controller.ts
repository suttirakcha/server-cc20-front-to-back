import { type NextFunction, type Request, type Response } from "express";
import prisma from "../config/prisma";
import { createError } from "../utils/createError";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // TODO overview register

    /* 
      1. Check body
      2. Check Email in Database
      3. Encrypt Password -> bcryptjs
      4. Save to Database -> Prisma
      5. Response
    */

    // Step 1 Check body
    const { email, name, password } = req.body;

    // Step 2 Check Email in Database
    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (user) {
      createError(400, "Email already exists!");
    }

    // Step 3 Encrypt password
    const hashPassword = bcrypt.hashSync(password, 10);

    // Step 4 Save to Database
    const result = await prisma.user.create({
      data: {
        email,
        name,
        password: hashPassword,
      },
    });

    // Step 5 Response
    res.json({ message: `Registered ${result.name} successfully` });
  } catch (error) {
    next(error);
  }
};

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // TODO overview login

    /* 
    1. Validate body
    2. Check body
    3. Check Email in Database
    4. Check Password
    5. Generate token
    6. Response
  */

    // Step 1-2 Validate and Check body
    const { email, password } = req.body;

    // Step 3 Check Email in Database
    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (!user) {
      createError(400, "Email or password is invalid");
    }

    // Step 4 Check Password

    const checkPassword = bcrypt.compareSync(password, user?.password!);
    if (!checkPassword) {
      createError(400, "Email or password is invalid");
    }

    // Step 5 Generate Token
    const payload = {
      id: user?.id,
      role: user?.role,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET!, {
      expiresIn: "1d",
      algorithm: "HS256",
    });

    res.json({ message: `Welcome back, ${user?.name}`, payload, token });
  } catch (error) {
    next(error);
  }
};

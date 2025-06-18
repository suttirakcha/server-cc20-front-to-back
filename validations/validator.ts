import { type NextFunction, type Request, type Response } from "express";
import { object, ref, string, type InferType } from "yup";

// Validate with yup

const MIN_NAME = 3;
const MIN_PASSWORD = 6;

export const registerSchema = object({
  email: string().email("Invalid email").required("Email is required"),
  name: string().min(MIN_NAME, `Name must be at least ${MIN_NAME} characters`),
  password: string().min(
    MIN_PASSWORD,
    `Password must be at least ${MIN_PASSWORD} characters`
  ),
  confirmPassword: string().oneOf([ref("password")], "Password does not match"),
});

export const loginSchema = object({
  email: string().email("Invalid email").required("Email is required"),
  password: string().min(
    MIN_PASSWORD,
    `Password must be at least ${MIN_PASSWORD} characters`
  ),
});

export const validate =
  (schema: InferType<any>) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validate(req.body, { abortEarly: false });
      next();
    } catch (error: any) {
      const errMessages = error.errors.map((err: string) => err);
      const errTxt = errMessages.join(",");
      console.log(errTxt);

      const mergeErr = new Error(errTxt);
      next(mergeErr);
    }
  };

import type { JwtPayload } from "jsonwebtoken";
import { type Request } from "express";

export interface AuthCheckRequest extends Request {
  user?: string | JwtPayload
}

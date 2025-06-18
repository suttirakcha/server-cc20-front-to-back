// Use TypeScript to easily debug and validate codes, if there are errors, developers can simply fix them

import express, {
  type NextFunction,
  type Request,
  type Response,
  type Application,
} from "express";
import cors from "cors";
import morgan from "morgan";
import userRouter from "./routes/user.route";
import authRouter from "./routes/auth.route";
import { type ErrorType } from "./utils/createError";

// Start server
const app: Application = express();
const PORT = 8000;

// Basic middlewares
app.use(cors()); // Allow cross domains
app.use(morgan("dev")); // Show logs
app.use(express.json()); // For reading body

// Routing GET, POST, PUT, PATCH, DELETE
app.use("/api", userRouter);
app.use("/auth", authRouter);

// Error Handling
app.use((err: ErrorType, req: Request, res: Response, next: NextFunction) => {
  // write code body
  res
    .status(err.statusCode || 500)
    .json({ message: err.message || "Something wrong" });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

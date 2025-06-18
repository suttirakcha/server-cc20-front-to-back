export type ErrorType = Error & { statusCode?: number };

export const createError = (statusCode: number, message: string) => {
  const error: ErrorType = new Error(message);
  error.statusCode = statusCode;
  throw error;
};

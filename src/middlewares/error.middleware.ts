import { type NextFunction, type Request, type Response } from "express";

export class AppError extends Error {
  statusCode: number;

  constructor(message: string, statusCode = 400) {
    super(message);
    this.statusCode = statusCode;
  }
}

export const errorHandler = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
): void => {
  const statusCode = err instanceof AppError ? err.statusCode : 500;
  console.error("X", err.message);

  res.status(statusCode).json({
    ok: false,
    message: err.message || "Error interno del servidor",
  });
};
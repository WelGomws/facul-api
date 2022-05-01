import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { secret } from "../config/auth.json";

export const authentication = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const { authorization } = request.headers;

  if (!authorization) {
    return response.status(401).send({ error: "No token provider" });
  }

  const payload = jwt.verify(authorization, secret) as any;

  request.userId = payload?.id;

  return next();
};

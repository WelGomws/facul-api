import jwt from "jsonwebtoken";
import { secret } from "../config/auth";

export const generateToken = (parameter: string) => {
  const token = jwt.sign({ id: parameter }, secret, { expiresIn: 86400 });
  return token;
};

import { Request, Response } from "express";
import bycript from "bcryptjs";
import { generateToken } from "../../common/authenticate";
import { removePassword } from "../../common/removePassword";
import userRepository from "../../repositories/user";

export const signin = async (request: Request, response: Response) => {
  try {
    const { email, password } = request.body;
    const user = await userRepository.findOneWithPassword({ email });
    if (!user) {
      return response.status(404).send({ error: "user not found" });
    }

    const compare = await bycript.compare(password, user.password);
    if (!compare) {
      return response.status(400).send({ error: "password invalid" });
    }

    const token = await generateToken(user.id);

    return response.status(201).json({ user: removePassword(user), token });
  } catch (error) {
    console.log(error);
  }
};

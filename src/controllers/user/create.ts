import { Request, Response } from "express";
import { generateToken } from "../../common/authenticate";
import { removePassword } from "../../common/removePassword";
import userRepository from "../../repositories/user";

export const create = async (request: Request, response: Response) => {
  try {
    const body = request.body;
    const userCreated = await userRepository.create(body);

    if (!body.type) {
      return response.status(201).json({ user: removePassword(userCreated) });
    }

    const token = await generateToken(userCreated.id);
    return response
      .status(201)
      .json({ user: removePassword(userCreated), token });
  } catch (error) {
    console.log(error);
  }
};

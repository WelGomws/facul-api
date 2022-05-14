import { Request, Response } from "express";
import commentRepository from "../../repositories/comment";

export const create = async (request: Request, response: Response) => {
  try {
    const body = request.body;
    const commentCreated = await commentRepository.create(body);

    return response.status(201).json(commentCreated);
  } catch (error) {
    console.log(error);
    return response.status(500);
  }
};

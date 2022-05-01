import { Request, Response } from "express";
import lineRepository from "../../repositories/line";
import { bodyRequest } from "../../types/line";

export const create = async (request: Request, response: Response) => {
  try {
    const body: bodyRequest = request.body;
    const lineCreated = await lineRepository.create(body);
    response.status(201).json(lineCreated);
  } catch (error) {
    if (error.code) {
      response
        .status(400)
        .json({ error: `this name '${error.keyValue.name}' already exists` });
    }

    console.log(error);
  }
};

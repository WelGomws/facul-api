import { Request, Response } from "express";
import commentRepository from "../../repositories/comment";
import { Filter } from "../../types/stations";

export const get = async (request: Request, response: Response) => {
  try {
    let filter: Filter = {};

    return response.json(await commentRepository.find(filter));
  } catch (error) {
    console.log(error);
    return response.status(500);
  }
};

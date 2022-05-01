import { Request, Response } from "express";
import lineRepository from "../../repositories/line";
import { Filter } from "../../types/stations";

export const get = async (request: Request, response: Response) => {
  try {
    response.json(await lineRepository.find());
  } catch (error) {
    response.status(500);
    console.log(error);
  }
};

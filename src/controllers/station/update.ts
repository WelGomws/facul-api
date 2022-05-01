import { Request, Response } from "express";
import stationRepository from "../../repositories/station";

export const update = async (request: Request, response: Response) => {
  try {
    const { id } = request.params;
    const { itens } = request.body;
    response.json(await stationRepository.update(id, itens));
  } catch (error) {
    response.status(500);
    console.log(error);
  }
};

import { Request, Response } from "express";
import stationRepository from "../../repositories/station";
import { Filter } from "../../types/stations";

export const get = async (request: Request, response: Response) => {
  try {
    let filter: Filter = {};
    const { line, name } = request.query;

    if (line) filter = { lineId: line };
    if (name) filter = { ...filter, name };

    response.json(await stationRepository.find(filter));
  } catch (error) {
    response.status(500);
    console.log(error);
  }
};

import { Request, Response } from "express";
import stationRepository from "../../repositories/station";
import { bodyRequest } from "../../types/stations";

export const create = async (request: Request, response: Response) => {
  try {
    const body: bodyRequest = request.body;
    const stationCreated = await stationRepository.create(body);
    response.status(201).json(stationCreated);
  } catch (error) {
    if (error.code) {
      response
        .status(400)
        .json({ error: `this name '${error.keyValue.name}' already exists` });
    }

    console.log(error);
  }
};

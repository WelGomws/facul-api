import { Request, Response } from "express";
import lineRepository from "../../repositories/line";
import stationRepository from "../../repositories/station";

export const getWithStations = async (request: Request, response: Response) => {
  try {
    const lines = await lineRepository.find();

    const linesWithStations = await Promise.all(
      lines.map(async (line) => {
        const stations = await stationRepository.find({ lineId: line.id });
        return {
          ...line._doc,
          stations,
        };
      })
    );

    response.json(linesWithStations);
  } catch (error) {
    response.status(500);
    console.log(error);
  }
};

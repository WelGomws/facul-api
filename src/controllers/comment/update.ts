import { Request, Response } from "express";
import commentRepository from "../../repositories/comment";

export const update = async (request: Request, response: Response) => {
  try {
    const { id } = request.params;
    const { active, stationId, reviewed } = request.body;

    await commentRepository.update(id, active, stationId, reviewed);
    response.json({ Successful: "Comment updated!" });
  } catch (error) {
    response.status(500);
    console.log(error);
  }
};

import { commentModel } from "../models/comment";
import { bodyRequest, Filter } from "../types/stations";

const create = async (body: bodyRequest) => commentModel.create(body);

const find = async (filter: Filter) => commentModel.find(filter);

const update = async (id: string, active: boolean, stationId: string) =>
  commentModel.updateOne(
    {
      _id: id,
    },
    {
      active,
      station: stationId,
    }
  );

export default { create, find, update };

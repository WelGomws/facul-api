import { stationModel } from "../models/station";
import { bodyRequest, Filter } from "../types/stations";

const create = async (body: bodyRequest) => stationModel.create(body);

const find = async (filter: Filter) => stationModel.find(filter);

const update = async (id, itens) =>
  stationModel.updateOne(
    {
      _id: id,
    },
    {
      accessibilityItems: itens,
    }
  );

export default { create, find, update };

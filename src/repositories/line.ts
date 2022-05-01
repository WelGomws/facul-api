import { lineModel } from "../models/line";
import { bodyRequest } from "../types/line";

const create = async (body: bodyRequest) => lineModel.create(body);

const find = async (filter?: any) => lineModel.find(filter);

export default { create, find };

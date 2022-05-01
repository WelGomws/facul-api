import { userModel } from "../models/user";
import { Filter } from "../types/stations";
import bycrypt from "bcryptjs";

const create = async (body) => {
  const { password } = body;
  const hash = await bycrypt.hash(password, 10);
  return userModel.create({ ...body, password: hash });
};

const find = async (filter: Filter) => userModel.find(filter);

const findOneWithPassword = async (filter) =>
  userModel.findOne(filter).select("+password");

export default { create, find, findOneWithPassword };

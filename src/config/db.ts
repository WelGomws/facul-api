import { connect } from "mongoose";

export const connection = () =>
  connect(process.env.MONGO_DB)
    .then(() => console.log("Connect to mongodb"))
    .catch((err) => console.log(err));

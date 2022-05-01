import { Router } from "express";
import healthRoutes from "./health";
import stationRoutes from "./stations";
import lineRoutes from "./line";
import userRoutes from "./user";

const routes = Router();

routes.use("/health", healthRoutes);
routes.use("/stations", stationRoutes);
routes.use("/lines", lineRoutes);
routes.use("/user", userRoutes);

export default routes;

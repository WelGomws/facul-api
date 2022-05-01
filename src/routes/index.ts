import { Router } from "express";
import healthRoutes from "./health";
import stationRoutes from "./stations";
import lineRoutes from "./line";

const routes = Router();

routes.use("/health", healthRoutes);
routes.use("/stations", stationRoutes);
routes.use("/lines", lineRoutes);

export default routes;

import { Router } from "express";
import healthRoutes from "./health";
import stationRoutes from "./stations";
import lineRoutes from "./line";
import userRoutes from "./user";
import commentsRoutes from "./comments";

const routes = Router();

routes.use("/health", healthRoutes);
routes.use("/stations", stationRoutes);
routes.use("/lines", lineRoutes);
routes.use("/user", userRoutes);
routes.use("/comments", commentsRoutes);

export default routes;

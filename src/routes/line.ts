import { Router } from "express";
import { controllerLine } from "../controllers";

const routes = Router();

routes.post("/", controllerLine.create);
routes.get("/", controllerLine.get);
routes.get("/with-stations", controllerLine.getWithStations);

export default routes;

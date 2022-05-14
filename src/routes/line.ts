import { Router } from "express";
import { controllerLine } from "../controllers";
import { authentication } from "../middlewares/authentication";

const routes = Router();

routes.post("/", authentication, controllerLine.create);
routes.get("/", controllerLine.get);
routes.get("/with-stations", controllerLine.getWithStations);

export default routes;

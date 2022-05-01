import { Router } from "express";
import { controllerStation } from "../controllers";
import { authentication } from "../middlewares/authentication";
const routes = Router();

routes.post("/", authentication, controllerStation.create);
routes.get("/", controllerStation.get);
routes.patch("/:id", authentication, controllerStation.update);

export default routes;

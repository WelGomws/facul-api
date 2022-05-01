import { Router } from "express";
import { controllerStation } from "../controllers";

const routes = Router();

routes.post("/", controllerStation.create);
routes.get("/", controllerStation.get);
routes.patch("/:id", controllerStation.update);

export default routes;

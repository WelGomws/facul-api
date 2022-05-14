import { Router } from "express";
import { controllerComment } from "../controllers";
import { authentication } from "../middlewares/authentication";

const routes = Router();

routes.post("/", controllerComment.create);
routes.get("/", controllerComment.get);
routes.patch("/:id", authentication, controllerComment.update);

export default routes;

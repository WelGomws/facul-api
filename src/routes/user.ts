import { Router } from "express";
import { controllerUser } from "../controllers";
const routes = Router();

routes.post("/signup", controllerUser.create);
routes.post("/signin", controllerUser.signin);

export default routes;

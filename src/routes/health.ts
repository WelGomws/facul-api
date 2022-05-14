import { Request, Response, Router } from "express";

const routes = Router();

routes.get("/", (request: Request, response: Response) =>
  response.json({ ok: true, version: "0.0.1" })
);

export default routes;

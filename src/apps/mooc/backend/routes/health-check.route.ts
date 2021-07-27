import { Request, Response, Router } from "express";
import { HealthCheckController } from "../controllers/health-check/HealthCheckController";

export const register = (router: Router) => {
  const controller: HealthCheckController = new HealthCheckController();
  router.get("/health-check", (req: Request, res: Response) =>
    controller.run(req, res)
  );
};

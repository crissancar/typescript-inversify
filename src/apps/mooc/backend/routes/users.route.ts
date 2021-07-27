import { Request, Response, Router } from "express";
import { UserGetController } from "../controllers/user/UserGetController";
import { container } from "../dependency-injection/inversify/inversify.config";
import { TYPES } from "../dependency-injection/inversify/types";

export const register = (router: Router) => {
  const userGetController = container.get<UserGetController>(
    TYPES.UserGetController
  );
  router.get("/users", (req: Request, res: Response) =>
    userGetController.run(req, res)
  );
};

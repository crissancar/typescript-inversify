import { Request, Response, Router } from "express";
import { UserGetController } from "../controllers/user/UserGetController";
import { getContainer } from "../dependency-injection/awilix/awilix.config";

export const register = (router: Router) => {
  const userGetController: UserGetController =
    getContainer().resolve("userGetController");

  router.get("/users", (req: Request, res: Response) =>
    userGetController.run(req, res)
  );
};

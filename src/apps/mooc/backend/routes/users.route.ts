import { Request, Response, Router } from "express";
import { UserGetController } from "../controllers/user/UserGetController";

export const register = (router: Router) => {
  const userGetController = new UserGetController();
  router.get("/users", (req: Request, res: Response) =>
    userGetController.run(req, res)
  );
};

import { Controller } from "../Controller";
import { UserFinder } from "../../../../../Contexts/Mooc/Users/application/UserFinder";
import httpStatus from "http-status";
import { Request, Response } from "express";

export class UserGetController implements Controller {
  private finder: UserFinder;

  constructor() {
    this.finder = new UserFinder();
  }

  async run(req: Request, res: Response): Promise<void> {
    let result;

    try {
      result = await this.finder.run();
    } catch (error) {
      res.status(httpStatus.BAD_REQUEST).send(error.message);
    }

    res.status(httpStatus.OK).json(result);
  }
}

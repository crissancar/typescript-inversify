import { Controller } from "../Controller";
import { Request, Response } from "express";
import httpStatus from "http-status";

export class HealthCheckController implements Controller {
  async run(req: Request, res: Response) {
    res.status(httpStatus.OK).send();
  }
}

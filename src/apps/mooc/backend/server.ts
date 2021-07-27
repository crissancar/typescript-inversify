import express, { Request, Response } from "express";
import * as http from "http";
import Router from "express-promise-router";
import errorHandler from "errorhandler";
import httpStatus from "http-status";
import { registerRoutes } from "./routes";
import loadIoCContainer from "../backend/dependency-injection/awilix/awilix.config";

export class Server {
  private express: express.Express;
  private port: string;
  private httpServer?: http.Server;

  constructor(port: string) {
    this.port = port;
    this.express = express();
    this.express.use(express.json());
    const router = Router();
    router.use(errorHandler());
    this.express.use(router);

    loadIoCContainer(this.express);

    registerRoutes(router);

    router.use((err: Error, req: Request, res: Response, next: Function) => {
      console.error(err);
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.message);
    });
  }

  async listen(): Promise<void> {
    return new Promise((resolve) => {
      this.httpServer = this.express.listen(this.port, () => {
        console.info(
          `Mooc Backend App is running at http://localhost:${
            this.port
          } in ${this.express.get("env")} mode`
        );
      });
      resolve();
    });
  }

  getHTTPServer(): http.Server | undefined {
    return this.httpServer;
  }

  async stop(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.httpServer) {
        this.httpServer.close((error) => {
          if (error) {
            return reject(error);
          }
          return resolve();
        });
      }
    });
  }
}

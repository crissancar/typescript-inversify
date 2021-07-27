import express from "express";
import { createContainer, asClass } from "awilix";
import { scopePerRequest } from "awilix-express";
import { UserFinder } from "../../../../../Contexts/Mooc/Users/application/UserFinder";
import { UserGetController } from "../../controllers/user/UserGetController";
import { InMemoryUserRepository } from "../../../../../Contexts/Mooc/Users/infrastructure/persistence/InMemoryUserRepository";

let container: any;

export default (express: express.Application) => {
  container = createContainer({ injectionMode: "CLASSIC" });

  container.register({
    userGetController: asClass(UserGetController).scoped(),
    userFinder: asClass(UserFinder).scoped(),
    userRepository: asClass(InMemoryUserRepository).scoped(),
  });

  express.use(scopePerRequest(container));
};

export function getContainer() {
  return container;
}

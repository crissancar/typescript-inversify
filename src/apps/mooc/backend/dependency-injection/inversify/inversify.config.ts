import "reflect-metadata";
import { Container } from "inversify";
import { UserFinder } from "../../../../../Contexts/Mooc/Users/application/UserFinder";
import { UserRepository } from "../../../../../Contexts/Mooc/Users/domain/UserRepository";
import { InMemoryUserRepository } from "../../../../../Contexts/Mooc/Users/infrastructure/persistence/InMemoryUserRepository";
import { UserGetController } from "../../controllers/user/UserGetController";
import { TYPES } from "./types";

const container = new Container();

container
  .bind<UserGetController>(TYPES.UserGetController)
  .to(UserGetController);
container.bind<UserFinder>(TYPES.UserFinder).to(UserFinder);
container.bind<UserRepository>(TYPES.UserRepository).to(InMemoryUserRepository);

export { container };

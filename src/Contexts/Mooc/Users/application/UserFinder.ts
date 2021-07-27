import { User } from "../domain/User";
import { inject, injectable } from "inversify";
import { UserRepository } from "../domain/UserRepository";
import { TYPES } from "../../../../apps/mooc/backend/dependency-injection/inversify/types";

@injectable()
export class UserFinder {
  private repository: UserRepository;

  constructor(@inject(TYPES.UserRepository) userRepository: UserRepository) {
    this.repository = userRepository;
  }

  async run(): Promise<User[]> {
    return await this.repository.getAll();
  }
}

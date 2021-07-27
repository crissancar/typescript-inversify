import { User } from "../domain/User";
import { UserRepository } from "../domain/UserRepository";

export class UserFinder {
  private repository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.repository = userRepository;
  }

  async run(): Promise<User[]> {
    return await this.repository.getAll();
  }
}

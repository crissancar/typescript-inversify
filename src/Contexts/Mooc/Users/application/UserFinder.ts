import { InMemoryUserRepository } from "../infrastructure/persistence/InMemoryUserRepository";
import { User } from "../domain/User";

export class UserFinder {
  private repository: InMemoryUserRepository;

  constructor() {
    this.repository = new InMemoryUserRepository();
  }

  async run(): Promise<User[]> {
    return await this.repository.getAll();
  }
}

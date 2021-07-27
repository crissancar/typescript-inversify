import { UserRepository } from "../../domain/UserRepository";
import { User } from "../../domain/User";
import { injectable } from "inversify";

@injectable()
export class InMemoryUserRepository implements UserRepository {
  users: User[] = [
    new User("0", "Cristian"),
    new User("1", "Ana"),
    new User("2", "Juan"),
  ];

  async getAll(): Promise<User[]> {
    return this.users;
  }
}

export class User {
  readonly id;
  readonly name;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }

  static create(id: string, name: string): User {
    return new User(id, name);
  }
}

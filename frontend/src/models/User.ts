export class User {
  public id: Number;

  constructor(other?: Partial<User>) {
    this.id = other?.id || 0;
  }
}

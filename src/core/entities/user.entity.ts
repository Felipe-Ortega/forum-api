export class User {
  id?: number;
  email: string;
  name: string;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;

  constructor(
    email: string,
    name: string,
    password: string
  ) {
    this.email = email;
    this.name = name;
    this.password = password;
  }
}
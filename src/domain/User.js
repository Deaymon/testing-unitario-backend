import { UserAge } from "./UserAge.js";
import { UserPassword } from "./UserPassword.js";
import { UserEmail } from "./UserEmail.js";

export class User {
  constructor(id, name, email, password, age) {
    if (typeof id !== "number") throw new Error("ID is not a number");
    this.id = id;
    if (typeof name !== "string") throw new Error("Name is not a string");
    this.name = name;
    this.email = new UserEmail(email);
    this.password = UserPassword.fromPlain(password)
    this.age = new UserAge(age);
  }

  getId() {
    return this.id;
  }

  hasName(name) {
    return this.name === name
  }

  getEmail() {
    return this.email.email
  }

  getHashedPassword() {
    return this.password.getPassword()
  }

  getAge() {
    return this.age.age
  }
}

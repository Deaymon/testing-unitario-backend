import crypto from "node:crypto";
import { UserAge } from "./UserAge.js";
import { UserPassword } from "./UserPassword.js";

export class User {
  constructor(id, name, email, password, age) {
    this.id = id;
    this.name = name;
    this.email = email;
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
    return this.email
  }

  getHashedPassword() {
    return this.password.getPassword()
  }

  getAge() {
    return this.age.age
  }
}

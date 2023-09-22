import crypto from "node:crypto";

export class UserPassword {
  static fromPlain(plain) {
    const hashed = this.getHashed(plain);

    return new UserPassword(hashed);
  }

  static getHashed(plain) {
    return crypto.createHash("sha256")
      .update(plain)
      .digest("hex");
  }

  constructor(password) {
    this.password = password
  }

  getPassword() {
    return this.password;
  }

  compare(plain) {
    return UserPassword.getHashed(plain) === this.password;
  }
}

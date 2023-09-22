import crypto from "node:crypto";

export class UserPassword {
  static fromPlain(plain) {
    this.ensurePassword(plain);
    
    const hashed = this.getHashed(plain);
    return new UserPassword(hashed);
  }

  static getHashed(plain) {
    return crypto.createHash("sha256")
      .update(plain)
      .digest("hex");
  }
  
  static ensurePassword(plain) {
    if (typeof plain !== "string") throw new Error("Password is not a string");

    if (plain.length < 6) {
      throw new Error("Password has less than 6 characters");
    }
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

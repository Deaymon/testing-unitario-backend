import { describe, expect, it } from "vitest";
import { User } from "./User.js";

describe("User", () => {
  it("has an id", () => {
    const id = 1;
    const user = new User(id, "notImportant", "not@important.com", "notImportant", 18)

    const userId = user.getId();

    expect(userId).equal(id)
  })

  it ("has an ID that is not a number", () => {
    const id = "id";

    expect(() => new User(id, "notImportant", "not@important.com", "notImportant", "notImportant")).toThrow("ID is not a number");
  })

  it ("has a name", () => {
    const name = "John";
    const user = new User(1, name, "not@important.com", "notImportant", 18);

    const result = user.hasName(name);

    expect(result).toBeTruthy()
  })

  it ("has a name that is not a string", () => {
    const name = 1;

    expect(() => new User(1, name, "not@important.com", "notImportant", "notImportant")).toThrow("Name is not a string");
  })

  it ("has an email", () => {
    const email = "jhon@gmail.com";
    const user = new User(1, "notImportant", email, "notImportant", 18);

    const userEmail = user.getEmail();

    expect(userEmail).equal(email);
  })

  describe("fails if email", () => {
    it ("has an invalid format", () => {
      const email = "email.test.a";

      expect(() => new User(1, "notImportant", email, "notImportant", "notImportant")).toThrow("Email not valid");
    })

    it ("is not a string", () => {
      const email = 1;

      expect(() => new User(1, "notImportant", email, "notImportant", "notImportant")).toThrow("Email is not a string");
    })
  })

  it ("has a password", () => {
    const password = "123456";
    const user = new User(1, "notImportant", "jhon@gmail.com", password, 18);

    const hashedPassword = user.getHashedPassword();

    expect(hashedPassword).equal("8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92");
  })
  describe("fails if password", () => {
    it ("has less than 6 characters", () => {
      const password = "12345";

      expect(() => new User(1, "notImportant", "jhon@gmail.com", password, "notImportant")).toThrow("Password has less than 6 characters");
    })

    it ("is not a string", () => {
      const password = 12345;

      expect(() => new User(1, "notImportant", "jhon@gmail.com", password, "notImportant")).toThrow("Password is not a string");
    })
  })

  it ("has an age", () => {
    const age = 18;
    const user = new User(1, "notImportant", "jhon@gmail.com", "notImportant", age);

    const userAge = user.getAge();

    expect(userAge).equal(age);
  })

  describe("fails if age", () => {
    it ("is not an number", () => {
      const age = "17";

      expect(() => new User(1, "notImportant", "jhon@gmail.com", "notImportant", age)).toThrow("Age is not an integer");
    })

    it ("is a NaN", () => {
      const age = Number.NaN;

      expect(() => new User(1, "notImportant", "jhon@gmail.com", "notImportant", age)).toThrow("Age is NaN");
    })

    it ("is under 18", () => {
      const age = 17;

      expect(() => new User(1, "notImportant", "jhon@gmail.com", "notImportant", age)).toThrow("User is not an adult");
    })
  })
})

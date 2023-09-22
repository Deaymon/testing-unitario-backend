export class UserAge {
    constructor(age) {
      this.age = age;
      this.ensureIsAdult();
    }
  
    ensureIsAdult() {
      if (typeof this.age !== "number") throw new Error("Age is not an integer");
      if (isNaN(this.age)) throw new Error("Age is NaN");

      if (this.age < 18) {
        throw new Error("User is not an adult");
      }
    }
  }
  
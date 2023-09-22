export class UserAge {
    constructor(age) {
      this.age = age;
      this.ensureIsAdult();
    }
  
    ensureIsAdult() {
      if (this.age < 18) {
        throw new Error("User is not an adult");
      }
    }
  }
  
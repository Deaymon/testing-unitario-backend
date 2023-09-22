export class UserEmail {
    constructor(email) {
      this.email = email;
      this.ensureEmailAddress();
    }
  
    ensureEmailAddress() {
        if (typeof this.email !== "string") throw new Error("Email is not a string");

        let regex = new RegExp('[a-zA-Z0-9]+@[a-z]+\.[a-z]{2,3}');
        if (!regex.test(this.email)) throw new Error("Email not valid");
    }
  }
  
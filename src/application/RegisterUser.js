import { User } from "../domain/User";

export class RegisterUser {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    execute(name, email, password, age) {
        const user = new User(Math.random(), name, email, password, age);
        this.userRepository.save(user);
    }
}
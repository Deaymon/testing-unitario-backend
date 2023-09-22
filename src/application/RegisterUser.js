import { User } from "../domain/User";

export class RegisterUser {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    execute(id, name, email, password, age) {
        const user = new User(id, name, email, password, age);
        this.userRepository.save(user);
    }
}
import { RegisterUser } from "./RegisterUser";
import { UserRepositoryMock } from "./UserRepositoryMock";
import { User } from "../domain/User";
import { describe, expect, it, vi } from "vitest";

describe("Register User", () => {
    it("saves a user in a repository", () => {
        const userRepository = new UserRepositoryMock();
        vi.spyOn(userRepository, "save");
        
        const registerUser = new RegisterUser(userRepository);
        registerUser.execute("name", "name@email.com", "password", 19);
        
        expect(userRepository.save).toHaveBeenCalled();
      })

      /*it("saves the user with the given data", () => {
          const userRepository = new UserRepositoryMock();
          vi.spyOn(userRepository, "save");
          
          const registerUser = new RegisterUser(userRepository);
          registerUser.execute("name", "name@email.com", "password", 19);
          
          expect(userRepository.save).toHaveBeenCalledWith(new User(1, "name", "name@email.com", "password", 19));
        })*/
})
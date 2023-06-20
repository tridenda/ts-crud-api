import bcrypt from "bcrypt";

import { User } from "../../model/user.model";
import { UserRepository } from "../../repository/user/user.repository";
import IUserService from "./user.interface";

class UserService implements IUserService {
  async signUp(user: User): Promise<void> {
    try {
      const saltRounds = 10;
      const salt = bcrypt.genSaltSync(saltRounds);
      const hash = bcrypt.hashSync(user.password, salt);

      user.password = hash;
      await new UserRepository().signUp(user);
    } catch (error) {
      throw new Error("Method not implemented.");
    }
  }

  async signIn(user: User): Promise<void> {
    throw new Error("Method not implemented.");
  }
}

export default UserService;

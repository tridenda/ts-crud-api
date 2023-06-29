import bcrypt from "bcrypt";

import { User } from "../../model/user.model";
import { UserRepository } from "../../repository/user/user.repository";
import IUserService from "./user.interface";

class UserService implements IUserService {
  async signUp(user: User): Promise<User> {
    try {
      const saltRounds = 10;
      const salt = bcrypt.genSaltSync(saltRounds);
      const hash = bcrypt.hashSync(user.password, salt);

      user.password = hash;
      return await new UserRepository().signUp(user);
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  async signIn(userParams: User): Promise<User> {
    try {
      const userRepository = new UserRepository();
      const user = (await userRepository.signIn(userParams)) as unknown as User;
      const match = await bcrypt.compare(userParams.password, user.password);

      if (!match) {
        throw new Error("Email or Password doesn't match!");
      }

      return user;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}

export default UserService;

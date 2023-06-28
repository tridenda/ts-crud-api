import { User } from "../../model/user.model";
import IUserRepositoy from "./user.interface";

export class UserRepository implements IUserRepositoy {
  public async signUp(user: User): Promise<User> {
    try {
      const isUnique = await User.findOne({
        where: { email: user.email },
      })
        .then((token) => token == null)
        .then((isUnique) => isUnique);

      if (!isUnique) {
        throw new Error("User has been registered!");
      }

      const newUser = await User.create({
        fullname: user.fullname,
        email: user.email,
        password: user.password,
      });

      return newUser;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  public async signIn(user: User): Promise<User> {
    try {
      const newUser = await User.findOne({
        where: { email: user.email },
      });

      if (!newUser) {
        throw new Error("User unregistered");
      }

      return newUser;
    } catch (error) {
      throw new Error("Failed to find the user");
    }
  }

  public async update(user: User): Promise<void> {
    try {
      const newUser = await User.findOne({
        where: { id: user.id },
      });

      if (!newUser) {
        throw new Error("User not found!");
      }

      newUser.fullname = user.fullname;
      newUser.email = user.email;
      newUser.password = user.password;
      newUser.save();
    } catch (error) {
      throw new Error("Failed to update user!");
    }
  }

  public async delete(id: number): Promise<void> {
    try {
      const newUser = await User.findOne({
        where: { id: id },
      });

      if (!newUser) {
        throw new Error("User not found!");
      }

      await newUser.destroy();
    } catch (error) {
      throw new Error("Failed to delete user!");
    }
  }

  public async findById(id: number): Promise<User> {
    try {
      const user = await User.findOne({
        where: { id: id },
      });

      if (!user) {
        throw new Error("User not found!");
      }

      return user;
    } catch (error) {
      throw new Error("Failed to find the user");
    }
  }

  public async findAll(): Promise<User[]> {
    try {
      return await User.findAll();
    } catch (error) {
      throw new Error("Failed to find all the users");
    }
  }
}

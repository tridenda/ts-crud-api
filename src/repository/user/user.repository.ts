import { User } from "../../model/user.model";
import IUserRepositoy from "./user.interface";

export class UserRepository implements IUserRepositoy {
  public async save(user: User): Promise<void> {
    try {
      await User.create({
        firstname: user.firstname,
        lastname: user.lastname,
        birthday: user.birthday,
      });
    } catch (error) {
      throw new Error("Failed to create user!");
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

      newUser.firstname = user.firstname;
      newUser.lastname = user.lastname;
      newUser.birthday = user.birthday;
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

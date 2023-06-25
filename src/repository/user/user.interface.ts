import { User } from "../../model/user.model";

interface IUserRepositoy {
  signUp(user: User): Promise<User>;
  signIn(user: User): Promise<User>;
  update(user: User): Promise<void>;
  delete(id: number): Promise<void>;
  findById(id: number): Promise<User>;
  findAll(): Promise<User[]>;
}

export default IUserRepositoy;

import { User } from "../../model/user.model";

interface IUserRepositoy {
  save(user: User): Promise<void>;
  update(user: User): Promise<void>;
  delete(id: number): Promise<void>;
  findById(id: number): Promise<User>;
  findAll(): Promise<User[]>;
}

export default IUserRepositoy;

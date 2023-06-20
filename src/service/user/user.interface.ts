import { User } from "../../model/user.model";

interface IUserService {
  signUp(user: User): Promise<void>;
  signIn(user: User): Promise<void>;
}

export default IUserService;

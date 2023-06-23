import { User } from "../../model/user.model";

interface IUserService {
  signUp(user: User): Promise<void>;
  signIn(userParams: User): Promise<User>;
}

export default IUserService;

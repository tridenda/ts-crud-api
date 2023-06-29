import { User } from "../../models/user/user.model";

interface IUserService {
  signUp(user: User): Promise<User>;
  signIn(userParams: User): Promise<User>;
}

export default IUserService;

import { User } from "../../model/user/user.model";

interface IUserService {
  signUp(user: User): Promise<User>;
  signIn(userParams: User): Promise<User>;
}

export default IUserService;

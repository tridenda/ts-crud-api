import userController from "../controller/user.controller";
import validate from "../helper/validate";
import { signUpSchema, updateUserSchema } from "../schema/user.schema";
import BaseRoutes from "./base/base-routes.router";

class UserRoutes extends BaseRoutes {
  routes(): void {
    this.router.post("/signup", validate(signUpSchema), userController.signUp);
    // this.router.post("/signin", validate(signInSchema), userController.signIn);
    this.router.patch(
      "/:id",
      validate(updateUserSchema),
      userController.update
    );
    this.router.delete("/:id", userController.delete);
    this.router.get("", userController.findAll);
    this.router.get("/:id", userController.findById);
  }
}

export default new UserRoutes().router;

import userController from "../controller/user.controller";
import validate from "../helper/validate";
import { createUserSchema, updateUserSchema } from "../schema/user.schema";
import BaseRoutes from "./base/base-routes.router";

class UserRoutes extends BaseRoutes {
  routes(): void {
    this.router.post("", validate(createUserSchema), userController.create);
    this.router.patch(
      "/:id",
      validate(updateUserSchema),
      userController.update
    );
    this.router.delete("/:id", userController.create);
    this.router.get("", userController.findAll);
    this.router.get("/:id", userController.findById);
  }
}

export default new UserRoutes().router;

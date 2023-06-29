import productController from "../controllers/product.controller";
import validate from "../helpers/validate";
import { addProductSchema } from "../schemas/product.schema";
import BaseRoutes from "./base/base-routes.router";

class ProductRouter extends BaseRoutes {
  routes(): void {
    this.router.post(
      "/add",
      validate(addProductSchema),
      productController.addProduct
    );
    // this.router.post("/signin", validate(signInSchema), userController.signIn);
  }
}

export default new ProductRouter().router;

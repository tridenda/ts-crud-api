import { Router } from "express";
import IBaseRoutes from "./base-routes.interface";

abstract class BaseRoutes implements IBaseRoutes {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  abstract routes(): void;
}

export default BaseRoutes;

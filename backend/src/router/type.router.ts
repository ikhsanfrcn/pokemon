import { Router } from "express";
import { TypeController } from "../controller/type.controller";

export class TypeRouter {
  private router: Router;
  private typeController: TypeController;

  constructor() {
    this.router = Router();
    this.typeController = new TypeController();
    this.initializeRoute();
  }

  private initializeRoute() {
    this.router.get("/", this.typeController.getTypes);
  }

  getRouter(): Router {
    return this.router;
  }
}

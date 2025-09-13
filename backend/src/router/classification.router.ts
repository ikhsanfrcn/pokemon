import { Router } from "express";
import { ClassificationController } from "../controller/classification.controller";

export class ClassificationRouter {
  private router: Router;
  private classificationController: ClassificationController;

  constructor() {
    this.router = Router();
    this.classificationController = new ClassificationController();
    this.initializeRoute();
  }

  private initializeRoute() {
    this.router.get("/", this.classificationController.getClassifications);
  }

  getRouter(): Router {
    return this.router;
  }
}

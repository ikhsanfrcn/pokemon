import { Router } from "express";
import { ResistanceController } from "../controller/resistance.controller";

export class ResistanceRouter {
  private router: Router;
  private resistanceController: ResistanceController;

  constructor() {
    this.router = Router();
    this.resistanceController = new ResistanceController();
    this.initializeRoute();
  }

  private initializeRoute() {
    this.router.get("/", this.resistanceController.getResistances);
  }

  getRouter(): Router {
    return this.router;
  }
}

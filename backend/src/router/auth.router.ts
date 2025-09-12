import { Router } from "express";
import { AuthController } from "../controller/auth.controller";
import { AuthMiddleware } from "../middleware/authMiddleware";

export class AuthRouter {
  private router: Router;
  private authController: AuthController;
  private authMiddleware: AuthMiddleware;

  constructor() {
    this.router = Router();
    this.authController = new AuthController();
    this.authMiddleware = new AuthMiddleware();
    this.initializeRoute();
  }

  private initializeRoute() {
    this.router.post("/register", this.authController.register);
    this.router.post("/login", this.authController.login);
    this.router.post("/request-reset", this.authController.requestPasswordReset);
    this.router.patch("/password-reset", this.authMiddleware.verifyToken, this.authController.passwordReset);
  }

  getRouter(): Router {
    return this.router;
  }
}

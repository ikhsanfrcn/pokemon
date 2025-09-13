import { Request, Response } from "express";
import { registerUserSchema } from "../validation/authSchema";
import { register } from "../services/auth/register";
import { ValidationError } from "yup";
import { login } from "../services/auth/login";
import { requestPasswordReset } from "../services/auth/requestReset";
import { passwordReset } from "../services/auth/resetPassword";

export class AuthController {
  async register(req: Request, res: Response) {
    try {
      const validateData = await registerUserSchema.validate(req.body, {
        abortEarly: false,
        stripUnknown: true,
      });

      const user = await register(validateData);
      res.status(200).json(user);
    } catch (error: any) {
      if (error instanceof ValidationError) {
        const errors: Record<string, string> = {};
        error.inner.forEach((error) => {
          if (error.path && !errors[error.path]) {
            errors[error.path] = error.message;
          }
        });

        return res.status(400).json({ errors });
      }

      res.status(error.status || 500).json({ message: error.message });
    }
  }

  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const result = await login({ email, password });
      res.status(200).json(result);
    } catch (error: any) {
      res.status(error.status || 500).json({ message: error.message });
    }
  }

  async requestPasswordReset(req: Request, res: Response) {
    try {
      const { email } = req.body;
      const result = await requestPasswordReset(email);
      res.status(200).json(result);
    } catch (error: any) {
      res
        .status(error.status || 500)
        .json({ message: error.message || "Internal server error" });
    }
  }

  async passwordReset(req: Request, res: Response) {
    try {
      const authHeader = req.headers.authorization;
      const { newPassword } = req.body;

      if (!authHeader || !authHeader.startsWith("Bearer ")) {
        res
          .status(400)
          .json({ message: "Authorization token is missing or invalid" });
        return;
      }

      const token = authHeader.split(" ")[1];

      const result = await passwordReset(token, newPassword);
      res.status(200).json(result);
    } catch (error: any) {
      res
        .status(error.status || 500)
        .json({ message: error.message || "Internal server error" });
    }
  }
}

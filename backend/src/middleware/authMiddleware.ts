import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { UserPayload } from "../types/custom";

export class AuthMiddleware {
  verifyToken(req: Request, res: Response, next: NextFunction) {
    try {
      const token = req.header("Authorization")?.replace("Bearer ", "");
      if (!token) {
        throw res.status(403).json({ message: "unauthorized" });
      }
      const verifyUser = verify(token, process.env.JWT_SECRET!);

      req.user = verifyUser as UserPayload;
      next();
    } catch (error) {
      res.status(500).json({ error });
    }
  }
}

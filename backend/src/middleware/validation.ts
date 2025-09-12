import { NextFunction, Request, Response } from "express";
import { body, validationResult } from "express-validator";

export const validateUpdateProfile = [
  body("name").notEmpty().isString(),

  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).send({ errors: errors.array() });
      return;
    }
    next();
  },
];
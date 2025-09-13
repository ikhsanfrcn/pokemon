import { Request, Response } from "express";
import { getTypes } from "../services/pokemon/type";

export class TypeController {
  async getTypes(req: Request, res: Response) {
    try {
      const data = await getTypes();
      res.json(data);
    } catch (error: any) {
      res
        .status(500)
        .json({ message: "Failed to fetch types", error: error.message });
    }
  }
}

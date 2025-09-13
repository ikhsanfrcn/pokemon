import { Request, Response } from "express";
import { getResistances } from "../services/pokemon/resistance";

export class ResistanceController {
  async getResistances(req: Request, res: Response) {
    try {
      const data = await getResistances();
      res.json(data);
    } catch (error: any) {
      res
        .status(500)
        .json({ message: "Failed to fetch resistances", error: error.message });
    }
  }
}

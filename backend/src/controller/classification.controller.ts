import { Request, Response } from "express";
import { getClassifications } from "../services/pokemon/classification";

export class ClassificationController {
  async getClassifications(req: Request, res: Response) {
    try {
      const data = await getClassifications();
      res.json(data);
    } catch (error: any) {
      res.status(500).json({
        message: "Failed to fetch classifications",
        error: error.message,
      });
    }
  }
}

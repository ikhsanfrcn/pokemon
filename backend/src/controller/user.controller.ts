import { Request, Response } from "express";
import getUserProfile from "../services/user/getUserProfile";
import { updateUserSchema } from "../validation/userValidation";
import updateUser from "../services/user/updateUser";
import getUserByEmail from "../services/user/getUserByEmail";
import updateAvatar from "../services/user/updateAvatar";
import { userPasswordChange } from "../services/user/passwordChange";

export class UserController {
  async getUserProfile(req: Request, res: Response) {
    try {
      const user = await getUserProfile(req.user?.id);
      res.status(200).send({ message: "User fetched successfully", user });
    } catch (error: any) {
      res.status(error.status || 500).json({ message: error.message });
    }
  }

  async updateUser(req: Request, res: Response) {
    try {
      const userId = req.user?.id as string;
      const validatedData = await updateUserSchema.validate(req.body, {
        abortEarly: false,
        stripUnknown: true,
      });
      const updatedUser = await updateUser(userId, validatedData);
      res
        .status(200)
        .send({ message: "User updated successfully", user: updatedUser });
    } catch (error: any) {
      res.status(error.status || 500).json({ message: error.message });
    }
  }

  async getUserByEmail(req: Request, res: Response) {
    try {
      const user = await getUserByEmail(req.params.email);
      res.status(200).send(user);
    } catch (error: any) {
      res.status(error.status || 500).json({ message: error.message });
    }
  }

  async updateAvatar(req: Request, res: Response) {
    try {
      const url = await updateAvatar(req.user?.id, req.file);
      res
        .status(200)
        .send({ message: "Avatar updated successfully", secure_url: url });
    } catch (error: any) {
      res.status(error.status || 500).json({ message: error.message });
    }
  }

  async passwordChange(req: Request, res: Response) {
      try {
        const userId = req.user?.id
        const { currentPassword, newPassword } = req.body;
    
        if (!userId) {
          res.status(400).json({ message: "Authorization token is missing or invalid" });
          return;
        }
    
        const result = await userPasswordChange(userId, currentPassword, newPassword);
        res.status(200).json(result);
      } catch (error: any) {        
        res.status(error.status || 500).json({ message: error.message || "Internal server error" });
      }
    }

    
}

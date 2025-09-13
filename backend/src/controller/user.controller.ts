import { Request, Response } from "express";
import getUserProfile from "../services/user/getUserProfile";
import { updateUserProfile } from "../services/user/updateUser";
import getUserByEmail from "../services/user/getUserByEmail";
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

  async updateProfileHandler(req: Request, res: Response) {
  try {
    const userId = req.user?.id as string;
    const { name, email, oldPassword, newPassword, confirmPassword } = req.body;
    const file = req.file;

    const updatedUser = await updateUserProfile({
      userId,
      name,
      email,
      oldPassword,
      newPassword,
      confirmPassword,
      file,
    });

    res.status(200).json({
      message: "Profile updated successfully",
      user: updatedUser,
    });
  } catch (error: any) {
    console.error(error);
    res.status(error.status || 500).json({
      message: error.message || "An unexpected error occurred",
      error: error.stack,
    });
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

  async passwordChange(req: Request, res: Response) {
    try {
      const userId = req.user?.id;
      const { currentPassword, newPassword } = req.body;

      if (!userId) {
        res
          .status(400)
          .json({ message: "Authorization token is missing or invalid" });
        return;
      }

      const result = await userPasswordChange(
        userId,
        currentPassword,
        newPassword
      );
      res.status(200).json(result);
    } catch (error: any) {
      res
        .status(error.status || 500)
        .json({ message: error.message || "Internal server error" });
    }
  }
}

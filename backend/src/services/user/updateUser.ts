import { cloudinaryUpload } from "../../helper/cloudinary";
import prisma from "../../prisma";
import { UpdateUserProfileInput } from "../../types/type";
import { comparePassword, hashPassword } from "../../utils/password";

export const updateUserProfile = async ({
  userId,
  name,
  email,
  oldPassword,
  newPassword,
  confirmPassword,
  file,
}: UpdateUserProfileInput) => {
  let imageUrl: string | undefined;

  if (oldPassword && newPassword && confirmPassword) {
    
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      throw { status: 404, message: "User not found" };
    }

    const isOldPasswordValid = await comparePassword(oldPassword, user.password);

    if (!isOldPasswordValid) {
      throw { status: 400, message: "Incorrect old password" };
    }

    if (newPassword !== confirmPassword) {
      throw { status: 400, message: "New password and confirm password do not match" };
    }


    const hashedNewPassword = await hashPassword(newPassword);

    await prisma.user.update({
      where: { id: userId },
      data: {
        password: hashedNewPassword,
      },
    });

  }

  if (file) {
    const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
    if (!allowedTypes.includes(file.mimetype)) {
      throw { status: 400, message: "Only .jpg, .jpeg, and .png files are allowed" };
    }

    const maxSize = 2 * 1024 * 1024;
    if (file.size > maxSize) {
      throw { status: 400, message: "Image must be under 2MB" };
    }

    const uploadResult = await cloudinaryUpload(file, "Avatars");
    imageUrl = uploadResult.secure_url;
  }

  const updatedUser = await prisma.user.update({
    where: { id: userId },
    data: {
      name,
      email,
      ...(imageUrl && { imageUrl }),
    },
    select: {
      id: true,
      name: true,
      email: true,
      imageUrl: true,
    },
  });

  return updatedUser;
};

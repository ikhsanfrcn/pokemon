import { cloudinaryUpload } from "../../helper/cloudinary";
import prisma from "../../prisma";

export default async function updateAvatar(userId?: string, file?: Express.Multer.File) {
  if (!file) throw { message: "Avatar is required" };

  const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
  if (!allowedTypes.includes(file.mimetype)) throw { message: "Only .jpg, .jpeg, and .png files are allowed" };

  const maxSize = 1 * 1024 * 1024;
  if (file.size > maxSize) throw { message: "File size must be less than 1MB" };

  const { secure_url } = await cloudinaryUpload(file, "jobsdoors");

  await prisma.user.update({
    where: { id: userId },
    data: { imageUrl: secure_url },
  });

  return secure_url;
}

import prisma from "../prisma";

export const ensureEmailNotExist = async (email: string) => {
  const emailExists = await prisma.user.findUnique({ where: { email } });
  if (emailExists)
    throw { status: 400, message: "Email is already registered" };
};

export const getUserOrThrow = async (userId?: string) => {
  if (!userId) throw { status: 400, message: "Unauthorized" };
  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user) throw { status: 400, message: "User not found" };
  return user;
};
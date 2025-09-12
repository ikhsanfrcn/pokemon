import { getUserOrThrow } from "../../helper/authHelper";
import prisma from "../../prisma";
import { comparePassword, hashPassword } from "../../utils/password";
import { validatePassword } from "../../utils/validatePassword";

export const userPasswordChange = async (userId: string, currentPassword: string, newPassword: string) => {
  validatePassword(newPassword);

  const user = await getUserOrThrow(userId)

  const passwordMatch = await comparePassword(currentPassword, user.password);
  if (!passwordMatch) {
    throw new Error('The old password you entered is incorrect');
  }

  const hashed = await hashPassword(newPassword);
  await prisma.user.update({
    where: { id: user.id },
    data: { password: hashed },
  });

  return { message: "Change password success" };
};

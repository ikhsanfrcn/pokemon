import { getUserOrThrow } from "../../helper/authHelper";
import prisma from "../../prisma";
import { decodeToken } from "../../utils/decodeToken";
import { hashPassword } from "../../utils/password";
import { validatePassword } from "../../utils/validatePassword";

export const passwordResetService = async (token: string, newPassword: string) => {
  validatePassword(newPassword);

  const decoded = decodeToken(token);
  const userId = decoded.userId || decoded.id;

  const user = await getUserOrThrow(userId)

  const tokenIssuedAt = decoded.iat * 1000;
  if (tokenIssuedAt < user.updatedAt.getTime()) {
    throw { status: 400, message: "This reset link is no longer valid" };
  }

  const hashed = await hashPassword(newPassword);
  await prisma.user.update({
    where: { id: user.id },
    data: { password: hashed },
  });

  return { message: "Reset password success" };
};

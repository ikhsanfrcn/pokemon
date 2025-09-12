import prisma from "../../prisma";
import { UserParams } from "../../types/type";

export default async function updateUser(userId: string, data: UserParams) {
  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user) throw { message: "User not found" };

  return prisma.user.update({
    where: { id: userId },
    data: {
      ...data,
    },
  });
}

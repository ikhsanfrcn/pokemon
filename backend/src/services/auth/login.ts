import prisma from "../../prisma";
import { LoginParams } from "../../types/type";
import { comparePassword } from "../../utils/password";
import { generateToken } from "../../utils/token";

export const login = async (params: LoginParams) => {
  const user = await prisma.user.findUnique({ where: { email: params.email } });
  if (!user) throw { status: 400, message: "User not found" };

  const valid = await comparePassword(params.password, user.password);
  if (!valid) throw { status: 400, message: "Invalid password" };


  const token = generateToken({ id: user.id });
  return { message: "Login successful", data: user, access_token: token };
};

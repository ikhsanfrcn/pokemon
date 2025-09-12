import { ensureEmailNotExist } from "../../helper/authHelper";
import prisma from "../../prisma";
import { RegisterParams } from "../../types/type";
import { hashPassword } from "../../utils/password";
import { generateToken } from "../../utils/token";

export const registerService = async (params: RegisterParams) => {
  await ensureEmailNotExist(params.email);

  const hashed = await hashPassword(params.password);
  const user = await prisma.user.create({
    data: { ...params, password: hashed },
  });

  const token = generateToken({ id: user.id, role: "USER" });

  return { message: "User registered", user, token };
};

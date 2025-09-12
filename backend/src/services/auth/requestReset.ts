import prisma from "../../prisma";
import { sign } from "jsonwebtoken";
import { sendVerificationEmail } from "../../utils/mailer";

export const requestPasswordResetService = async (email: string) => {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) throw { status: 400, message: "User not found" };

  const token = sign({ id: user.id }, process.env.JWT_SECRET!, {
    expiresIn: "1h",
  });

  await sendVerificationEmail({
    email,
    subject: "Password Reset",
    templateName: "passwordReset",
    templateData: {
      name: user.name,
      link: `${process.env.BASE_URL_FRONTEND}/password/reset/${token}`,
    },
  });

  return { message: "Request sent" };
};

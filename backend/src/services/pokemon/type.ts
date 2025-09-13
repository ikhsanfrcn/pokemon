import prisma from "../../prisma";

export const getTypes = async () => {
  return prisma.type.findMany();
};

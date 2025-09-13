import prisma from "../../prisma";

export const getResistances = async () => {
  return prisma.resistance.findMany();
};

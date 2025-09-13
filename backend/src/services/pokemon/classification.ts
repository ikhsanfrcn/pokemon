import prisma from "../../prisma";

export const getClassifications = async () => {
  return prisma.classification.findMany();
};

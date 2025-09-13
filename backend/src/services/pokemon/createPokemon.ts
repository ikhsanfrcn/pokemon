import prisma from "../../prisma";
import { cloudinaryUpload } from "../../helper/cloudinary";

interface CreatePokemonInput {
  number: number;
  name: string;
  classificationId: number;
  typeIds: number[];
  resistanceIds: number[];
  evolutionIds?: number[];
}

export const createPokemon = async (
  data: CreatePokemonInput,
  file?: Express.Multer.File
) => {
  if (!file) throw { message: "Image is required", status: 400 };

  const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
  if (!allowedTypes.includes(file.mimetype)) {
    throw { message: "Only .jpg, .jpeg, and .png files are allowed", status: 400 };
  }

  const maxSize = 2 * 1024 * 1024;
  if (file.size > maxSize) throw { message: "Image must be under 2MB", status: 400 };

  const { secure_url } = await cloudinaryUpload(file, "Pokemons");

  const { number, name, classificationId, typeIds, resistanceIds, evolutionIds } = data;

  const newPokemon = await prisma.pokemon.create({
    data: {
      number,
      name,
      imageUrl: secure_url,
      classificationId,
      types: {
        create: typeIds.map((typeId) => ({ typeId })),
      },
      resistances: {
        create: resistanceIds.map((resistanceId) => ({ resistanceId })),
      },
      evolutions: evolutionIds
        ? {
            create: evolutionIds.map((toPokemonId) => ({ toPokemonId })),
          }
        : undefined,
    },
    include: {
      classification: true,
      types: { include: { type: true } },
      resistances: { include: { resistance: true } },
      evolutions: { include: { toPokemon: true } },
    },
  });

  return newPokemon;
};

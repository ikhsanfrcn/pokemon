import prisma from "../../prisma";
import { cloudinaryUpload } from "../../helper/cloudinary";

interface UpdatePokemonInput {
  name?: string;
  number?: number;
  classificationId?: number;
  typeIds?: number[];
  resistanceIds?: number[];
}

export async function updatePokemon(
  id: number,
  data: UpdatePokemonInput,
  file?: Express.Multer.File
) {
  let imageUrl: string | undefined = undefined;

  if (file) {
    const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
    if (!allowedTypes.includes(file.mimetype)) {
      throw { message: "Only .jpg, .jpeg, and .png files are allowed", status: 400 };
    }

    const maxSize = 2 * 1024 * 1024;
    if (file.size > maxSize) {
      throw { message: "Image must be under 2MB", status: 400 };
    }

    const uploadResult = await cloudinaryUpload(file, "Pokemons");
    imageUrl = uploadResult.secure_url;
  }

  const updatedPokemon = await prisma.pokemon.update({
    where: { id },
    data: {
      name: data.name,
      number: data.number,
      imageUrl: imageUrl,
      classificationId: data.classificationId,
    },
  });

  if (data.typeIds) {
    await prisma.pokemonType.deleteMany({ where: { pokemonId: id } });

    for (const typeId of data.typeIds) {
      await prisma.pokemonType.create({
        data: {
          pokemonId: id,
          typeId,
        },
      });
    }
  }
  
  if (data.resistanceIds) {
    await prisma.pokemonResistance.deleteMany({ where: { pokemonId: id } });

    for (const resistanceId of data.resistanceIds) {
      await prisma.pokemonResistance.create({
        data: {
          pokemonId: id,
          resistanceId,
        },
      });
    }
  }

  return updatedPokemon;
}

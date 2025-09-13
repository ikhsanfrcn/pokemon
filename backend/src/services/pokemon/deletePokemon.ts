import prisma from "../../prisma";

export const deletePokemon = async (id: number) => {
  const existing = await prisma.pokemon.findUnique({ where: { id } });
  if (!existing) {
    throw new Error("Pokemon not found");
  }

  await prisma.pokemonType.deleteMany({
    where: { pokemonId: id },
  });

  await prisma.pokemonResistance.deleteMany({
    where: { pokemonId: id },
  });

  await prisma.evolution.deleteMany({
    where: { fromPokemonId: id },
  });

  await prisma.evolution.deleteMany({
    where: { toPokemonId: id },
  });

  return prisma.pokemon.delete({
    where: { id },
  });
};

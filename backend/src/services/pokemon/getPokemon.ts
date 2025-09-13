import prisma from "../../prisma";

export const getAllPokemons = async () => {
  return prisma.pokemon.findMany({
    include: {
      classification: true,
      types: { include: { type: true } },
      resistances: { include: { resistance: true } },
    },
    orderBy: { number: "asc" },
  });
};

export const getPokemonById = async (id: number) => {
  return prisma.pokemon.findUnique({
    where: { id },
    include: {
      classification: true,
      types: { include: { type: true } },
      resistances: { include: { resistance: true } },
      evolutions: {
        include: { toPokemon: true },
      },
      preEvolutions: {
        include: { fromPokemon: true },
      },
    },
  });
};

export const getNextAvailableNumber = async (): Promise<number> => {
  const result = await prisma.$queryRawUnsafe<{ smallest_missing: number }[]>(`
    SELECT MIN(missing.number) AS smallest_missing
    FROM (
      SELECT generate_series(1, (SELECT COALESCE(MAX(number), 0) + 1 FROM "Pokemon")) AS number
    ) AS missing
    LEFT JOIN "Pokemon" p ON p.number = missing.number
    WHERE p.number IS NULL
  `);

  return result?.[0]?.smallest_missing ?? 1;
};
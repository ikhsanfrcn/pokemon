import { PrismaClient } from "./generated/client";

const prisma = new PrismaClient();

async function main() {
  // =====================
  // Helpers
  // =====================
  async function createClassification(name: string) {
    return prisma.classification.upsert({
      where: { name },
      update: {},
      create: { name },
    });
  }

  async function createType(name: string) {
    return prisma.type.upsert({
      where: { name },
      update: {},
      create: { name },
    });
  }

  async function createResistance(name: string) {
    return prisma.resistance.upsert({
      where: { name },
      update: {},
      create: { name },
    });
  }

  async function createPokemon(
    number: number,
    name: string,
    classification: string,
    imageUrl: string,
    types: string[],
    resistances: string[]
  ) {
    const classificationObj = await prisma.classification.findUnique({
      where: { name: classification },
    });
    if (!classificationObj) {
      throw new Error(`Classification '${classification}' belum ada`);
    }

    const pokemon = await prisma.pokemon.upsert({
      where: { number },
      update: {},
      create: {
        number,
        name,
        imageUrl,
        classificationId: classificationObj.id,
      },
    });

    // Hubungkan type
    for (const typeName of types) {
      const type = await prisma.type.findUnique({ where: { name: typeName } });
      if (!type) continue;

      await prisma.pokemonType.upsert({
        where: {
          pokemonId_typeId: {
            pokemonId: pokemon.id,
            typeId: type.id,
          },
        },
        update: {},
        create: {
          pokemonId: pokemon.id,
          typeId: type.id,
        },
      });
    }

    // Hubungkan resistance
    for (const resName of resistances) {
      const res = await prisma.resistance.findUnique({
        where: { name: resName },
      });
      if (!res) continue;

      await prisma.pokemonResistance.upsert({
        where: {
          pokemonId_resistanceId: {
            pokemonId: pokemon.id,
            resistanceId: res.id,
          },
        },
        update: {},
        create: {
          pokemonId: pokemon.id,
          resistanceId: res.id,
        },
      });
    }

    return pokemon;
  }

  async function createEvolution(from: number, to: number) {
    const fromPoke = await prisma.pokemon.findUnique({
      where: { number: from },
    });
    const toPoke = await prisma.pokemon.findUnique({ where: { number: to } });
    if (!fromPoke || !toPoke) return;

    await prisma.evolution.upsert({
      where: {
        fromPokemonId_toPokemonId: {
          fromPokemonId: fromPoke.id,
          toPokemonId: toPoke.id,
        },
      },
      update: {},
      create: {
        fromPokemonId: fromPoke.id,
        toPokemonId: toPoke.id,
      },
    });
  }

  // =====================
  // Seed master data
  // =====================
  const classifications = [
    "Seed Pokémon",
    "Lizard Pokémon",
    "Flame Pokémon",
    "Tiny Turtle Pokémon",
    "Turtle Pokémon",
    "Shellfish Pokémon",
    "Mouse Pokémon",
    "Bird Pokémon",
    "Snake Pokémon",
    "Dragon Pokémon",
    "Bug Pokémon",
    "Hairy Bug Pokémon",
    "Cocoon Pokémon",
    "Butterfly Pokémon",
    "Bat Pokémon",
    "Sludge Pokémon",
    "Gas Pokémon",
    "Shadow Pokémon",
    "Rock Pokémon",
    "Ground Pokémon",
    "Psychic Pokémon",
    "Fighting Pokémon",
    "Fairy Pokémon",
    "Poison Bee Pokémon",
    "Worm Pokémon"
  ];
  for (const c of classifications) await createClassification(c);

  const types = [
    "Normal",
    "Fire",
    "Water",
    "Grass",
    "Electric",
    "Ice",
    "Fighting",
    "Poison",
    "Ground",
    "Flying",
    "Psychic",
    "Bug",
    "Rock",
    "Ghost",
    "Dragon",
    "Dark",
    "Steel",
    "Fairy",
  ];
  for (const t of types) await createType(t);

  const resistances = [
    "Fire",
    "Water",
    "Grass",
    "Electric",
    "Psychic",
    "Ice",
    "Dragon",
    "Dark",
    "Steel",
    "Fairy",
    "Fighting",
    "Poison",
    "Bug",
    "Ghost",
    "Ground",
    "Flying",
    "Rock",
    "Normal",
  ];
  for (const r of resistances) await createResistance(r);

  // =====================
  // Seed Pokémon
  // =====================
  const bulbasaur = await createPokemon(
    1,
    "Bulbasaur",
    "Seed Pokémon",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    ["Grass", "Poison"],
    ["Water", "Electric", "Grass", "Fighting"]
  );

  const ivysaur = await createPokemon(
    2,
    "Ivysaur",
    "Seed Pokémon",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
    ["Grass", "Poison"],
    ["Water", "Electric", "Grass", "Fighting"]
  );

  const venusaur = await createPokemon(
    3,
    "Venusaur",
    "Seed Pokémon",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
    ["Grass", "Poison"],
    ["Water", "Electric", "Grass", "Fighting"]
  );

  const charmander = await createPokemon(
    4,
    "Charmander",
    "Lizard Pokémon",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    ["Fire"],
    ["Fire", "Grass", "Ice", "Bug", "Steel", "Fairy"]
  );

  const charmeleon = await createPokemon(
    5,
    "Charmeleon",
    "Flame Pokémon",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
    ["Fire"],
    ["Fire", "Grass", "Ice", "Bug", "Steel", "Fairy"]
  );

  const charizard = await createPokemon(
    6,
    "Charizard",
    "Flame Pokémon",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
    ["Fire", "Flying"],
    ["Fire", "Grass", "Fighting", "Bug", "Steel", "Fairy"]
  );

  const squirtle = await createPokemon(
    7,
    "Squirtle",
    "Tiny Turtle Pokémon",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
    ["Water"],
    ["Fire", "Water", "Ice", "Steel"]
  );

  const wartortle = await createPokemon(
    8,
    "Wartortle",
    "Turtle Pokémon",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
    ["Water"],
    ["Fire", "Water", "Ice", "Steel"]
  );

  const blastoise = await createPokemon(
    9,
    "Blastoise",
    "Shellfish Pokémon",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
    ["Water"],
    ["Fire", "Water", "Ice", "Steel"]
  );

  const caterpie = await createPokemon(
    10,
    "Caterpie",
    "Worm Pokémon",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
    ["Bug"],
    ["Grass", "Fighting", "Ground"]
  );

  const metapod = await createPokemon(
    11,
    "Metapod",
    "Cocoon Pokémon",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
    ["Bug"],
    ["Grass", "Fighting", "Ground"]
  );

  const butterfree = await createPokemon(
    12,
    "Butterfree",
    "Butterfly Pokémon",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
    ["Bug", "Flying"],
    ["Grass", "Fighting", "Bug"]
  );

  const weedle = await createPokemon(
    13,
    "Weedle",
    "Hairy Bug Pokémon",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png",
    ["Bug", "Poison"],
    ["Grass", "Fighting", "Poison", "Bug", "Fairy"]
  );

  const kakuna = await createPokemon(
    14,
    "Kakuna",
    "Cocoon Pokémon",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png",
    ["Bug", "Poison"],
    ["Grass", "Fighting", "Poison", "Bug", "Fairy"]
  );

  const beedrill = await createPokemon(
    15,
    "Beedrill",
    "Poison Bee Pokémon",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png",
    ["Bug", "Poison"],
    ["Grass", "Fighting", "Poison", "Bug", "Fairy"]
  );

  // =====================
  // Evolutions
  // =====================
  await createEvolution(1, 2);
  await createEvolution(2, 3);
  await createEvolution(4, 5);
  await createEvolution(5, 6);
  await createEvolution(7, 8);
  await createEvolution(8, 9);
  await createEvolution(10, 11);
  await createEvolution(11, 12);
  await createEvolution(13, 14);
  await createEvolution(14, 15);

  console.log("Pokémon + Type + Resistance + Evolutions berhasil di-seed");
}

main()
  .catch((e) => {
    console.error("Error seeding:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

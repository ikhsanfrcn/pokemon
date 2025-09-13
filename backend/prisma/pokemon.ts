import { PrismaClient } from "./generated/client";

const prisma = new PrismaClient();

async function main() {
  const typeGrass = await prisma.type.findUnique({ where: { name: "Grass" } });
  const typePoison = await prisma.type.findUnique({ where: { name: "Poison" } });
  const typeFire = await prisma.type.findUnique({ where: { name: "Fire" } });
  const typeWater = await prisma.type.findUnique({ where: { name: "Water" } });
  const typeBug = await prisma.type.findUnique({ where: { name: "Bug" } });
  const typeFlying = await prisma.type.findUnique({ where: { name: "Flying" } });

  if (!typeGrass || !typePoison || !typeFire || !typeWater || !typeBug || !typeFlying) {
    throw new Error("❌ Beberapa type belum ada di database, pastikan seed types sudah jalan.");
  }

  async function createPokemon(
    number: number,
    name: string,
    classification: string,
    imageUrl: string,
    types: string[]
  ) {
    const classificationObj = await prisma.classification.findUnique({
      where: { name: classification },
    });
    if (!classificationObj) {
      throw new Error(`Classification '${classification}' belum ada di DB.`);
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

    // Hubungkan types
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

    return pokemon;
  }

  // Seed Pokémon
  const bulbasaur = await createPokemon(
    1,
    "Bulbasaur",
    "Seed Pokémon",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    ["Grass", "Poison"]
  );

  const ivysaur = await createPokemon(
    2,
    "Ivysaur",
    "Seed Pokémon",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
    ["Grass", "Poison"]
  );

  const venusaur = await createPokemon(
    3,
    "Venusaur",
    "Seed Pokémon",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
    ["Grass", "Poison"]
  );

  const charmander = await createPokemon(
    4,
    "Charmander",
    "Lizard Pokémon",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    ["Fire"]
  );

  const charmeleon = await createPokemon(
    5,
    "Charmeleon",
    "Flame Pokémon",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
    ["Fire"]
  );

  const charizard = await createPokemon(
    6,
    "Charizard",
    "Flame Pokémon",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
    ["Fire", "Flying"]
  );

  const squirtle = await createPokemon(
    7,
    "Squirtle",
    "Tiny Turtle Pokémon",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
    ["Water"]
  );

  const wartortle = await createPokemon(
    8,
    "Wartortle",
    "Turtle Pokémon",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
    ["Water"]
  );

  const blastoise = await createPokemon(
    9,
    "Blastoise",
    "Shellfish Pokémon",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
    ["Water"]
  );

  const caterpie = await createPokemon(
    10,
    "Caterpie",
    "Worm Pokémon",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
    ["Bug"]
  );

  const metapod = await createPokemon(
    11,
    "Metapod",
    "Cocoon Pokémon",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
    ["Bug"]
  );

  const butterfree = await createPokemon(
    12,
    "Butterfree",
    "Butterfly Pokémon",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
    ["Bug", "Flying"]
  );

  const weedle = await createPokemon(
    13,
    "Weedle",
    "Hairy Bug Pokémon",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png",
    ["Bug", "Poison"]
  );

  const kakuna = await createPokemon(
    14,
    "Kakuna",
    "Cocoon Pokémon",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png",
    ["Bug", "Poison"]
  );

  const beedrill = await createPokemon(
    15,
    "Beedrill",
    "Poison Bee Pokémon",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png",
    ["Bug", "Poison"]
  );

  // Evolutions
  async function createEvolution(from: number, to: number) {
    const fromPoke = await prisma.pokemon.findUnique({ where: { number: from } });
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

  // Seed Evolutions
  await createEvolution(1, 2); // Bulbasaur -> Ivysaur
  await createEvolution(2, 3); // Ivysaur -> Venusaur
  await createEvolution(4, 5); // Charmander -> Charmeleon
  await createEvolution(5, 6); // Charmeleon -> Charizard
  await createEvolution(7, 8); // Squirtle -> Wartortle
  await createEvolution(8, 9); // Wartortle -> Blastoise
  await createEvolution(10, 11); // Caterpie -> Metapod
  await createEvolution(11, 12); // Metapod -> Butterfree
  await createEvolution(13, 14); // Weedle -> Kakuna
  await createEvolution(14, 15); // Kakuna -> Beedrill

  console.log("Pokémon + Evolutions berhasil di-seed");
}

main()
  .catch((e) => {
    console.error("Error seeding Pokémon:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

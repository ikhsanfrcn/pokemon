import { PrismaClient } from "./generated/client";

const prisma = new PrismaClient();

async function main() {
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

  for (const name of types) {
    await prisma.type.upsert({
      where: { name },
      update: {},
      create: { name },
    });
  }

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

  for (const name of resistances) {
    await prisma.resistance.upsert({
      where: { name },
      update: {},
      create: { name },
    });
  }

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
    "Poison Bee Pokémon"
  ];

  for (const name of classifications) {
    await prisma.classification.upsert({
      where: { name },
      update: {},
      create: { name },
    });
  }

  console.log("Seed data inserted!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

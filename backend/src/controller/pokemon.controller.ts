import { Request, Response } from "express";
import {
  getAllPokemons,
  getNextAvailableNumber,
  getPokemonById,
} from "../services/pokemon/getPokemon";
import { createPokemon } from "../services/pokemon/createPokemon";
import { deletePokemon } from "../services/pokemon/deletePokemon";
import { updatePokemon } from "../services/pokemon/updatePokemon";

export class PokemonControler {
  async getPokemons(req: Request, res: Response) {
    try {
      const pokemons = await getAllPokemons();
      res.json(pokemons);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error fetching pokemons" });
    }
  }

  async getPokemonDetail(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const pokemon = await getPokemonById(id);

      if (!pokemon) {
        return res.status(404).json({ message: "Pokemon not found" });
      }

      res.json(pokemon);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error fetching pokemon detail" });
    }
  }

  async createPokemon(req: Request, res: Response) {
    try {
      const { number, name, classificationId, typeIds, resistanceIds, evolutionIds  } =
        req.body;

      const typeIdsArray = JSON.parse(typeIds);
      const resistanceIdsArray = JSON.parse(resistanceIds);
      const evolutionIdsArray = evolutionIds ? JSON.parse(evolutionIds) : [];

      const newPokemon = await createPokemon(
        {
          number: Number(number),
          name,
          classificationId: Number(classificationId),
          typeIds: typeIdsArray,
          resistanceIds: resistanceIdsArray,
          evolutionIds: evolutionIdsArray,
        },
        req.file
      );

      res.status(201).json({
        message: "Pokemon created successfully",
        data: newPokemon,
      });
    } catch (error: any) {
      res.status(error.status || 500).json({ message: error.message });
    }
  }

  async getNextNumber(req: Request, res: Response) {
    try {
      const nextNumber = await getNextAvailableNumber();
      res.json({ number: nextNumber });
    } catch (error) {
      console.error("Error getting next number:", error);
      res.status(500).json({ message: "Gagal mendapatkan nomor berikutnya" });
    }
  }

  async deletePokemon(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid ID" });
      }

      const deleted = await deletePokemon(id);
      res.json({ message: "Pokemon deleted successfully", deleted });
    } catch (error: any) {
      res
        .status(500)
        .json({ message: "Failed to delete Pokemon", error: error.message });
    }
  }

  async updatePokemon(req: Request, res: Response) {
  const id = Number(req.params.id);

  try {
    const { name, number, classificationId, typeIds, resistanceIds } = req.body;

    const parsedTypeIds = JSON.parse(typeIds || "[]");
    const parsedResistanceIds = JSON.parse(resistanceIds || "[]");

    const updated = await updatePokemon(
      id,
      {
        name,
        number: Number(number),
        classificationId: Number(classificationId),
        typeIds: parsedTypeIds,
        resistanceIds: parsedResistanceIds,
      },
      req.file
    );

    res.json(updated);
  } catch (error) {
    console.error("Error update Pokemon:", error);
    res.status(500).json({ message: "Gagal update Pokemon" });
  }
}
}

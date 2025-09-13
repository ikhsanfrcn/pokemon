import { Router } from "express";
import { PokemonControler } from "../controller/pokemon.controller";
import { uploader } from "../helper/uploader";

export class PokemonRouter {
  private router: Router;
  private pokemonController: PokemonControler;

  constructor() {
    this.router = Router();
    this.pokemonController = new PokemonControler();
    this.initializeRoute();
  }

  private initializeRoute() {
    this.router.get("/next-number", this.pokemonController.getNextNumber);
    this.router.get("/", this.pokemonController.getPokemons);
    this.router.get("/:id", this.pokemonController.getPokemonDetail);
    this.router.post(
      "/",
      uploader("memoryStorage", "pokemon-").single("image"),
      this.pokemonController.createPokemon
    );
    this.router.delete("/:id", this.pokemonController.deletePokemon);
    this.router.put(
      "/:id",
      uploader("memoryStorage", "pokemon-").single("image"),
      this.pokemonController.updatePokemon
    );
  }

  getRouter(): Router {
    return this.router;
  }
}

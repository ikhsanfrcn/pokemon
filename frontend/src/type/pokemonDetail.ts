export type PokemonDetail = {
  id: number;
  number: number | string;
  name: string;
  imageUrl: string;
  classification: { id: number; name: string };
  types: { id: number; type: { id: number; name: string } }[];
  resistances: { id: number; resistance: { id: number; name: string } }[];
  evolutions: {
    id: number;
    toPokemon: {
      id: number;
      number: number | string;
      name: string;
      imageUrl: string;
    };
  }[];
  preEvolutions: {
    id: number;
    fromPokemon: {
      id: number;
      number: number | string;
      name: string;
      imageUrl: string;
    };
  }[];
};

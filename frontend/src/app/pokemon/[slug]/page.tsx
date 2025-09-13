import { notFound } from "next/navigation";
import PokemonDetail from "../_components/pokemonDetail";
import axios from "@/lib/axios";

async function getPokemon(slug: string) {
  try {
    const res = await axios.get(`/pokemons/${slug}`);
    return res.data;
  } catch (error) {
    return null;
  }
}

export default async function PokemonPage({ params }: { params: { slug: string } }) {
  const pokemon = await getPokemon(params.slug);

  if (!pokemon) return notFound();

  return (
    <main>
      <PokemonDetail pokemon={pokemon} />
    </main>
  );
}

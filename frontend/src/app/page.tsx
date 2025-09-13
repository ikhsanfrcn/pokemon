"use client";

import Header from "../components/header";
import { useEffect, useState } from "react";
import Card from "../components/card";
import axios from "@/lib/axios";
import { FaPlus } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";

type Pokemon = {
  id: number;
  number: number;
  name: string;
  imageUrl: string;
  types: { type: { name: string } }[];
};

export default function Page() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    axios
      .get("/pokemons")
      .then((res) => {
        setPokemons(res.data);
      })
      .catch(() => setError("Failed to load pokemons"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  const formattedPokemons = pokemons.map((pokemon) => ({
    id: pokemon.id,
    number: pokemon.number,
    name: pokemon.name,
    image: pokemon.imageUrl,
    types: pokemon.types.map((t) => t.type.name),
  }));

  return (
    <div>
      <Header />
      <div className="px-[142px]">
        <div className="pt-[40px] text-white">
          <button
            className="flex bg-[#E51C23] rounded-md p-[12px] items-center cursor-pointer"
            onClick={() => router.push("/pokemon/create")}
          >
            <FaPlus /> <span className="ml-[8px]">Tambah Pokemon Baru</span>
          </button>
        </div>
        <div className="pt-[40px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-4">
          {formattedPokemons.map((pokemon) => (
            <Link key={pokemon.id} href={`/pokemon/${pokemon.id}`}>
              <Card
                key={pokemon.id}
                number={pokemon.number}
                name={pokemon.name}
                image={pokemon.image}
                types={pokemon.types}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

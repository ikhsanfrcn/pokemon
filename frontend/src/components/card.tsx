import Image from "next/image";

type PokemonCardProps = {
  id: number;
  name: string;
  image: string;
  types: string[];
};

const typeColors: Record<string, string> = {
  Grass: "bg-green-500",
  Poison: "bg-purple-500",
  Fire: "bg-orange-500",
  Water: "bg-blue-500",
  Bug: "bg-lime-500",
  Flying: "bg-sky-400",
};

export default function Card({ id, name, image, types }: PokemonCardProps) {
  return (
    <div className="rounded-xl border shadow-md p-4 flex flex-col items-center bg-white">
      <p className="text-gray-500 text-sm font-medium">#{String(id).padStart(3, "0")}</p>

      <Image
        src={image}
        alt={name}
        width={100}
        height={100}
        className="my-2"
      />

      <h2 className="font-semibold text-lg text-red-600">{name}</h2>

      <div className="flex gap-2 mt-2 flex-wrap justify-center">
        {types.map((type) => (
          <span
            key={type}
            className={`px-3 py-1 rounded-md text-white text-xs font-medium ${typeColors[type]}`}
          >
            {type}
          </span>
        ))}
      </div>
    </div>
  );
}

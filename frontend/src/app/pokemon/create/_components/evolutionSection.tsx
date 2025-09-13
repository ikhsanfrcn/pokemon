import Image from "next/image";

interface Pokemon {
  id: number;
  number?: number;
  name: string;
  imageUrl: string;
  types?: { type: { name: string } }[];
}

interface Props {
  pokemons: Pokemon[];
  evolutionIds: number[];
  onOpenModal: () => void;
}

const typeColors: Record<string, string> = {
  Grass: "bg-green-500",
  Fire: "bg-red-500",
  Water: "bg-blue-500",
  Electric: "bg-yellow-400 text-black",
  Poison: "bg-purple-500",
  Default: "bg-gray-500",
};

export default function EvolutionSection({
  pokemons,
  evolutionIds,
  onOpenModal,
}: Props) {
  const selectedEvolutions = pokemons.filter((p) =>
    evolutionIds.includes(p.id)
  );

  return (
    <div className="mt-6">
      <h2 className="text-[#E51C23] text-[20px] font-semibold mb-[12px]">Evolution</h2>

      <button
        onClick={onOpenModal}
        className="w-full bg-red-600 text-white py-2 rounded-lg mb-4 hover:bg-red-700 transition cursor-pointer"
      >
        + Tambah
      </button>

      <div className="flex flex-col gap-3">
        {selectedEvolutions.map((p) => (
          <div
            key={p.id}
            className="flex items-center gap-3 border rounded-lg p-[12px] shadow-sm"
          >
            <Image
              src={p.imageUrl}
              width={60}
              height={60}
              alt={p.name}
              className="rounded-md object-contain"
            />
            <div>
              <p className="font-semibold">
                #{p.number ?? "??"} {p.name}
              </p>
              <div className="flex gap-1 mt-1">
                {p.types?.map((t, i) => (
                  <span
                    key={i}
                    className={`px-2 py-0.5 text-xs rounded text-white ${
                      typeColors[t.type.name] || typeColors.Default
                    }`}
                  >
                    {t.type.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

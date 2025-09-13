import Image from "next/image";

type PokemonCardProps = {
  number: number;
  name: string;
  image: string;
  types: string[];
};

const typeColors: Record<string, string> = {
  Grass: "bg-[#8BC34A]",
  Poison: "bg-[#AA22B0]",
  Fire: "bg-[#FF7A00]",
  Water: "bg-[#2BC3FF]",
  Bug: "bg-[#8BC34A]",
  Flying: "bg-[#CC9CF7]",
};

export default function Card({ number, name, image, types }: PokemonCardProps) {
  return (
    <div className="rounded-xl border shadow-md p-4">
      <p className="text-[#8D7777] text-[23.06px] font-semibold">
        #{String(number).padStart(3, "0")}
      </p>
      <div className="flex flex-col items-center">
        <div className="w-[217px] h-[259px] flex items-center justify-center">
          <Image
            src={image}
            alt={name}
            width={217}
            height={259}
            className="object-contain"
          />
        </div>

        <h2 className="font-semibold text-[23.06px] text-red-600">{name}</h2>

        <div className="flex gap-2 mt-2 flex-wrap justify-center">
          {types.map((type) => (
            <span
              key={type}
              className={`px-[13.18px] py-[6.59px] rounded-md text-white text-[19.77px] font-semibold ${
                typeColors[type] || "bg-black"
              }`}
            >
              {type}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

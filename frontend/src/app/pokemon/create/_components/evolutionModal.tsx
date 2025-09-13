import Image from "next/image";
import { IoMdClose, IoMdCheckmark } from "react-icons/io";
import { useState, useEffect } from "react";

interface Pokemon {
  id: number;
  name: string;
  imageUrl: string;
  types?: { type: { name: string } }[];
}

interface Props {
  pokemons: Pokemon[];
  evolutionIds: number[];
  setEvolutionIds: (ids: number[]) => void;
  isOpen: boolean;
  onClose: () => void;
}

const typeColors: Record<string, string> = {
  Grass: "bg-green-500",
  Fire: "bg-red-500",
  Water: "bg-blue-500",
  Electric: "bg-yellow-400 text-black",
  Default: "bg-gray-500",
};

export default function EvolutionModal({
  pokemons,
  evolutionIds,
  setEvolutionIds,
  isOpen,
  onClose,
}: Props) {
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  useEffect(() => {
    if (isOpen) {
      setSelectedIds(evolutionIds);
    }
  }, [isOpen, evolutionIds]);

  const toggleSelect = (id: number) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((eid) => eid !== id) : [...prev, id]
    );
  };

  const handleConfirm = () => {
    setEvolutionIds(selectedIds);
    onClose();
  };

  const handleCancel = () => {
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white rounded-2xl max-w-[700px] max-h-[70vh] flex flex-col p-[40px]">
        <div className="flex justify-between items-center p-6">
          <h2 className="font-semibold text-lg text-[#E51C23] flex-grow text-center">
            Tambah Evolusi
          </h2>
          <IoMdClose
            onClick={handleCancel}
            className="cursor-pointer text-xl"
          />
        </div>

        <div className="flex-grow overflow-y-auto">
          <div className="flex flex-col gap-4">
            {pokemons.map((p) => {
              const isSelected = selectedIds.includes(p.id);
              return (
                <div
                  key={p.id}
                  onClick={() => toggleSelect(p.id)}
                  className={`flex items-center justify-between border p-3 rounded-lg cursor-pointer ${
                    isSelected ? "border-red-500 bg-red-50" : "border-gray-200"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Image
                      src={p.imageUrl}
                      width={50}
                      height={50}
                      alt={p.name}
                      className="rounded-md object-contain"
                    />
                    <div>
                      <p className="font-medium">{p.name}</p>
                      <div className="flex gap-1">
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

                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center border transition-colors ${
                      isSelected
                        ? "bg-red-500 text-white border-red-500"
                        : "border-gray-400"
                    }`}
                  >
                    {isSelected && <IoMdCheckmark className="text-sm" />}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="sticky bottom-0 bg-white flex justify-between gap-3">
          <button
            onClick={handleCancel}
            className="px-[115px] py-[12px] rounded-md border border-[#E51C23] text-[#E51C23] hover:bg-gray-100 transition cursor-pointer"
          >
            Batal
          </button>
          <button
            onClick={handleConfirm}
            className="px-[115px] py-[12px] rounded-md bg-[#E51C23] text-white hover:bg-red-600 transition cursor-pointer"
          >
            Tambah
          </button>
        </div>
      </div>
    </div>
  );
}

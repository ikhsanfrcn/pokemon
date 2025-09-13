import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import TypeModal from "./typeModal";
interface Type {
  id: number;
  name: string;
}

interface Props {
  types: Type[];
  typeIds: number[];
  setTypeIds: (ids: number[]) => void;
  typeColors: Record<string, string>;
}

export default function TypeSelector({ types, typeIds, setTypeIds, typeColors }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <label className="text-sm font-medium">Types</label>
      <div className="flex justify-between bg-[#FFF8F8] p-3 rounded">
        <div className="flex flex-wrap gap-2">
          {typeIds.map((id) => {
            const type = types.find((t) => t.id === id);
            if (!type) return null;
            const typeColor = typeColors[type.name] || typeColors.Default;
            return (
              <span
                key={id}
                className={`flex items-center gap-1 px-3 py-1 rounded-md text-sm text-white ${typeColor}`}
              >
                {type.name}
                <button type="button" onClick={() => setTypeIds(typeIds.filter((tid) => tid !== id))}>
                  ✕
                </button>
              </span>
            );
          })}
        </div>
        <button type="button" onClick={() => setOpen(true)}>
          <IoIosArrowDown className="text-xl text-red-600" />
        </button>
      </div>

      {open && (
        <TypeModal
          types={types}
          selected={typeIds}
          onClose={() => setOpen(false)}
          onSave={(ids) => setTypeIds(ids)}
          typeColors={typeColors}
        />
      )}
    </div>
  );
}

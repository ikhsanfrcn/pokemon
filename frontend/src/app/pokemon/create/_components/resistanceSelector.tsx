import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import ResistanceModal from "./resistanceModal";

interface Resistance {
  id: number;
  name: string;
}
interface Props {
  resistances: Resistance[];
  resistanceIds: number[];
  setResistanceIds: (ids: number[]) => void;
}

export default function ResistanceSelector({ resistances, resistanceIds, setResistanceIds }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <label className="text-sm font-medium">Resistances</label>
      <div className="flex justify-between bg-[#FFF8F8] p-3 rounded">
        <div className="flex flex-wrap gap-2">
          {resistanceIds.map((id) => {
            const res = resistances.find((r) => r.id === id);
            if (!res) return null;
            return (
              <span key={id} className="flex items-center gap-1 px-3 py-1 rounded-md text-sm text-white bg-gray-700">
                {res.name}
                <button type="button" onClick={() => setResistanceIds(resistanceIds.filter((rid) => rid !== id))}>
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
        <ResistanceModal
          resistances={resistances}
          selected={resistanceIds}
          onClose={() => setOpen(false)}
          onSave={(ids) => setResistanceIds(ids)}
        />
      )}
    </div>
  );
}

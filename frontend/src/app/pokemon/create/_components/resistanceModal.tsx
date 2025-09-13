import { useState } from "react";

interface Resistance {
  id: number;
  name: string;
}
interface Props {
  resistances: Resistance[];
  selected: number[];
  onClose: () => void;
  onSave: (ids: number[]) => void;
}

export default function ResistanceModal({ resistances, selected, onClose, onSave }: Props) {
  const [picked, setPicked] = useState<number[]>(selected);

  const toggle = (id: number) => {
    setPicked((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-96">
        <h2 className="text-lg font-semibold mb-4">Pilih Resistances</h2>
        <div className="grid grid-cols-2 gap-2 max-h-64 overflow-y-auto">
          {resistances.map((r) => (
            <button
              key={r.id}
              onClick={() => toggle(r.id)}
              className={`px-3 py-2 rounded-lg text-white ${
                picked.includes(r.id) ? "ring-2 ring-red-500" : ""
              } bg-gray-700`}
            >
              {r.name}
            </button>
          ))}
        </div>
        <div className="flex justify-end gap-2 mt-4">
          <button onClick={onClose} className="px-4 py-2 rounded bg-gray-200">
            Batal
          </button>
          <button
            onClick={() => {
              onSave(picked);
              onClose();
            }}
            className="px-4 py-2 rounded bg-red-500 text-white"
          >
            Simpan
          </button>
        </div>
      </div>
    </div>
  );
}

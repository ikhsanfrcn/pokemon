import { useState } from "react";

interface Type {
  id: number;
  name: string;
}

interface Props {
  types: Type[];
  selected: number[];
  onClose: () => void;
  onSave: (ids: number[]) => void;
  typeColors: Record<string, string>;
}

export default function TypeModal({ types, selected, onClose, onSave, typeColors }: Props) {
  const [picked, setPicked] = useState<number[]>(selected);

  const toggle = (id: number) => {
    setPicked((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-96">
        <h2 className="text-lg font-semibold mb-4">Pilih Types</h2>
        <div className="grid grid-cols-2 gap-2 max-h-64 overflow-y-auto">
          {types.map((t) => (
            <button
              key={t.id}
              onClick={() => toggle(t.id)}
              className={`px-3 py-2 rounded-lg text-white ${
                picked.includes(t.id) ? "ring-2 ring-red-500" : ""
              } ${typeColors[t.name] || typeColors.Default}`} 
            >
              {t.name}
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

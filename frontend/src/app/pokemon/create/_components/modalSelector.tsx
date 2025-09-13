import Modal from "@/components/modal";

export const SelectFromModal = ({
  label,
  options,
  selected,
  onChange,
  isOpen,
  onClose,
}: {
  label: string;
  options: { id: number; name: string }[];
  selected: number[];
  onChange: (values: number[]) => void;
  isOpen: boolean;
  onClose: () => void;
})=> {
  const toggleSelection = (id: number) => {
    if (selected.includes(id)) {
      onChange(selected.filter((v) => v !== id));
    } else {
      onChange([...selected, id]);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h3 className="text-lg font-semibold mb-4">{label}</h3>
      <div className="max-h-60 overflow-y-auto">
        {options.map((opt) => (
          <label key={opt.id} className="flex items-center space-x-2 mb-2 cursor-pointer">
            <input
              type="checkbox"
              checked={selected.includes(opt.id)}
              onChange={() => toggleSelection(opt.id)}
              className="cursor-pointer"
            />
            <span>{opt.name}</span>
          </label>
        ))}
      </div>
      <div className="mt-4 flex justify-end">
        <button
          className="px-4 py-2 bg-red-500 text-white rounded"
          onClick={onClose}
        >
          Tutup
        </button>
      </div>
    </Modal>
  );
}

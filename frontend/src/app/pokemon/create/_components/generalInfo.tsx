interface Props {
  number: number;
  name: string;
  setName: (v: string) => void;
  classificationId: number | null;
  setClassificationId: (v: number) => void;
  classifications: { id: number; name: string }[];
}

export default function GeneralInfo({
  number,
  name,
  setName,
  classificationId,
  setClassificationId,
  classifications,
}: Props) {
  return (
    <div className="space-y-4">
      <h2 className="text-[#E51C23] text-[20px] font-semibold mb-[12px]">
        Informasi Umum
      </h2>
      <div>
        <label className="text-sm font-medium">Nomor</label>
        <input
          type="text"
          value={`#${number}`}
          readOnly
          className="w-full p-2"
        />
      </div>

      <div>
        <label className="text-sm font-medium">Nama</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full bg-[#FFF8F8] p-[12px] rounded"
        />
      </div>

      <div>
        <label className="text-sm font-medium">Classification</label>
        <select
          value={classificationId ?? ""}
          onChange={(e) => setClassificationId(Number(e.target.value))}
          className="w-full px-4 py-3 bg-[#FFF8F8] text-sm rounded"
        >
          <option value="">Pilih Classification</option>
          {classifications.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

import Image from "next/image";

interface Props {
  imagePreview: string | null;
  setImagePreview: (v: string | null) => void;
  setImageFile: (f: File | null) => void;
}

export default function ImageUpload({ imagePreview, setImagePreview, setImageFile }: Props) {
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="w-1/4 flex flex-col items-center">
      <div className="w-40 h-40 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
        {imagePreview ? (
          <Image src={imagePreview} width={160} height={160} alt="Preview" className="object-cover w-full h-full" />
        ) : (
          <span className="text-gray-400">No Image</span>
        )}
      </div>
      <div className="mt-4">
        <label htmlFor="file-input" className="text-red-500 cursor-pointer text-sm">
          {imagePreview ? "Ubah Image" : "Pilih Image"}
        </label>
        <input id="file-input" type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
      </div>
    </div>
  );
}

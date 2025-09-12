"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

interface EditProfileFormProps {
  user: { id: string; name: string; email: string; imageUrl: string | null };
  onSave: (updatedUser: { id: string; name: string; email: string; imageUrl: string | null }) => void;
  onCancel: () => void;
}

export default function EditProfileForm({ user, onSave, onCancel }: EditProfileFormProps) {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [imageUrl, setImageUrl] = useState(user.imageUrl || "");

  // Untuk mengatur tampilan password
  const [showPassword, setShowPassword] = useState({
    old: false,
    new: false,
    confirm: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Kirimkan data profil yang telah diperbarui ke parent (ProfilePage)
    onSave({ id: user.id, name, email, imageUrl });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-red-600 font-semibold">Profil</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full border rounded-md px-3 py-2"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full border rounded-md px-3 py-2"
      />

      <h2 className="text-red-600 font-semibold mt-6">Ubah Password</h2>

      {/* Password Lama */}
      <div className="relative">
        <input
          type={showPassword.old ? "text" : "password"}
          placeholder="Masukkan Password Lama"
          className="w-full border rounded-md px-3 py-2 pr-10"
        />
        <button
          type="button"
          onClick={() => setShowPassword({ ...showPassword, old: !showPassword.old })}
          className="absolute right-3 top-2 text-gray-500"
        >
          {showPassword.old ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>

      {/* Password Baru */}
      <div className="relative">
        <input
          type={showPassword.new ? "text" : "password"}
          placeholder="Masukkan Password Baru"
          className="w-full border rounded-md px-3 py-2 pr-10"
        />
        <button
          type="button"
          onClick={() => setShowPassword({ ...showPassword, new: !showPassword.new })}
          className="absolute right-3 top-2 text-gray-500"
        >
          {showPassword.new ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>

      {/* Konfirmasi Password Baru */}
      <div className="relative">
        <input
          type={showPassword.confirm ? "text" : "password"}
          placeholder="Masukkan Konfirmasi Password Baru"
          className="w-full border rounded-md px-3 py-2 pr-10"
        />
        <button
          type="button"
          onClick={() =>
            setShowPassword({ ...showPassword, confirm: !showPassword.confirm })
          }
          className="absolute right-3 top-2 text-gray-500"
        >
          {showPassword.confirm ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>

      <div className="flex justify-between">
        <button
          type="button"
          onClick={onCancel}
          className="bg-gray-300 text-black px-4 py-2 rounded-md hover:bg-gray-400"
        >
          Batal
        </button>
        <button
          type="submit"
          className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
        >
          Simpan
        </button>
      </div>
    </form>
  );
}

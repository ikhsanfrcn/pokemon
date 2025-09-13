"use client";

import { useState } from "react";
import { BiSolidHide, BiSolidShow } from "react-icons/bi";

interface EditProfileFormProps {
  user: { id: string; name: string; email: string; imageUrl: string | null };
  onSave: (updatedUser: {
    id: string;
    name: string;
    email: string;
    imageUrl: string | null;
    oldPassword?: string;
    newPassword?: string;
    confirmPassword?: string;
  }) => Promise<void>; 
  onCancel: () => void;
}

export default function EditProfileForm({
  user,
  onSave,
  onCancel,
}: EditProfileFormProps) {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [imageUrl] = useState(user.imageUrl || "");

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState({
    old: false,
    new: false,
    confirm: false,
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await onSave({
        id: user.id,
        name,
        email,
        imageUrl,
        oldPassword,
        newPassword,
        confirmPassword,
      });
    } catch (error) {
      console.error("Error saving profile:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block mb-1 font-medium text-sm">Nama</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-md px-3 py-2 bg-[#FFF8F8]"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium text-sm">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-md px-3 py-2 bg-[#FFF8F8]"
        />
      </div>

      <h2 className="text-[20px] text-red-600 font-semibold mt-6">
        Ubah Password
      </h2>

      <div>
        <label className="block mb-1 font-medium text-sm">Password Lama</label>
        <div className="relative">
          <input
            type={showPassword.old ? "text" : "password"}
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            placeholder="Masukkan Password Lama"
            className="w-full bg-[#FFF8F8] rounded-md px-3 py-2 pr-10"
          />
          <button
            type="button"
            onClick={() =>
              setShowPassword({ ...showPassword, old: !showPassword.old })
            }
            className="absolute right-3 top-[50%] -translate-y-1/2"
          >
            {showPassword.old ? <BiSolidShow /> : <BiSolidHide />}
          </button>
        </div>
      </div>

      <div>
        <label className="block mb-1 font-medium text-sm">Password Baru</label>
        <div className="relative">
          <input
            type={showPassword.new ? "text" : "password"}
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="Masukkan Password Baru"
            className="w-full bg-[#FFF8F8] rounded-md px-3 py-2 pr-10"
          />
          <button
            type="button"
            onClick={() =>
              setShowPassword({ ...showPassword, new: !showPassword.new })
            }
            className="absolute right-3 top-[50%] -translate-y-1/2"
          >
            {showPassword.new ? <BiSolidShow /> : <BiSolidHide />}
          </button>
        </div>
      </div>

      <div>
        <label className="block mb-1 font-medium text-sm">
          Konfirmasi Password Baru
        </label>
        <div className="relative">
          <input
            type={showPassword.confirm ? "text" : "password"}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Konfirmasi Password Baru"
            className="w-full bg-[#FFF8F8] rounded-md px-3 py-2 pr-10"
          />
          <button
            type="button"
            onClick={() =>
              setShowPassword({
                ...showPassword,
                confirm: !showPassword.confirm,
              })
            }
            className="absolute right-3 top-[50%] -translate-y-1/2"
          >
            {showPassword.confirm ? <BiSolidShow /> : <BiSolidHide />}
          </button>
        </div>
      </div>

      <div className="flex justify-between pt-4">
        <button
          type="button"
          onClick={onCancel}
          className="bg-gray-300 px-4 py-2 rounded-md cursor-pointer"
        >
          Batal
        </button>
        <button
          type="submit"
          disabled={loading}
          className={`${
            loading ? "bg-gray-400" : "bg-red-600 cursor-pointer"
          } text-white px-4 py-2 rounded-md`}
        >
          {loading ? "Memproses..." : "Simpan"}
        </button>
      </div>
    </form>
  );
}

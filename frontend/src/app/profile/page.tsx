/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import EditProfileForm from "./_components/editProfileForm";
import SuccessModal from "./_components/successModal";
import Image from "next/image";
import axios from "@/lib/axios";
import { toast } from "react-toastify";

type User = {
  id: string;
  name: string;
  email: string;
  imageUrl: string | null;
};

export default function ProfilePage() {
  const [user, setUser] = useState<User | null>(null);
  const [editMode, setEditMode] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const fetchProfile = async () => {
    try {
      const token = localStorage.getItem("authToken");
      const response = await axios.get("/users/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUser(response.data.user);
    } catch (err: any) {
      toast.error("Gagal mengambil profil");
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const handleSave = async (updatedUser: User) => {
    try {
      const token = localStorage.getItem("authToken");
      const response = await axios.put(
        "/users/profile",
        {
          name: updatedUser.name,
          email: updatedUser.email,
          imageUrl: updatedUser.imageUrl,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        setUser(response.data.user);
        setShowSuccess(true);
        setEditMode(false);
      }
    } catch (err: any) {
      toast.error("Gagal menyimpan perubahan profil");
    }
  };

  const handleAvatarChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const formData = new FormData();
      formData.append("image", file);

      try {
        const token = localStorage.getItem("authToken");
        const response = await axios.patch("/users/update-avatar", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status === 200) {
          setUser((prevUser) => ({
            ...prevUser!,
            imageUrl: response.data.imageUrl,
          }));
          setImagePreview(URL.createObjectURL(file));
          toast.success("Avatar berhasil diubah!");
        }
      } catch (err: any) {
        toast.error("Gagal mengubah avatar");
        console.error(err);
      }
    }
  };

  if (loading) {
    return <div className="p-6">Memuat data profil...</div>;
  }

  if (error) {
    return <div className="p-6 text-red-500">{error}</div>;
  }

  if (!user) {
    return <div className="p-6">Tidak ada data pengguna.</div>;
  }

  return (
    <div className="min-h-screen">
      <div className="bg-red-600 text-white px-6 py-3">
        <h1 className="text-lg font-semibold">Profil</h1>
      </div>
      <div className="pt-[24px] px-[146px]">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/3 flex flex-col">
            <div className="relative w-32 h-32">
              <Image
                src={imagePreview || user.imageUrl || "/default-avatar.png"}
                alt="Avatar"
                fill
                className="rounded-full object-cover h-[240] w-[240px]"
              />
            </div>
            {editMode && (
              <>
                <label
                  htmlFor="file-input"
                  className="mt-4 text-red-500 cursor-pointer text-sm"
                >
                  {imagePreview || user.imageUrl ? "Ubah Image" : "Pilih Image"}
                </label>
                <input
                  id="file-input"
                  type="file"
                  onChange={handleAvatarChange}
                  accept="image/*"
                  className="hidden"
                />
              </>
            )}
          </div>

          <div className="bg-white rounded-lg shadow p-6 mt-4 md:mt-0 md:ml-6 w-full">
            {!editMode ? (
              <>
                <h2 className="text-red-600 font-semibold mb-4">Profil</h2>
                <div className="space-y-2">
                  <p>
                    <span className="font-medium">Nama:</span> {user.name}
                  </p>
                  <p>
                    <span className="font-medium">Email:</span> {user.email}
                  </p>
                </div>
              </>
            ) : (
              <EditProfileForm
                user={user}
                onSave={handleSave}
                onCancel={() => setEditMode(false)}
              />
            )}
          </div>
        </div>
        <div className="flex justify-end mt-[44px]">
          <button
            onClick={() => setEditMode(true)}
            className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
          >
            Ubah Profil
          </button>
        </div>
      </div>

      {showSuccess && (
        <SuccessModal
          isOpen={showSuccess}
          onClose={() => setShowSuccess(false)}
          message="Profil Berhasil Diubah"
          description="Perubahan profil berhasil disimpan"
        />
      )}
    </div>
  );
}

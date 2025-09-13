/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import EditProfileForm from "./_components/editProfileForm";
import SuccessModal from "../../components/successModal";
import Image from "next/image";
import axios from "@/lib/axios";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { MdArrowBackIos } from "react-icons/md";
import { useRouter } from "next/navigation";

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
  const [imageFile, setImageFile] = useState<File | null>(null);

  const router = useRouter();

  const fetchProfile = async () => {
    try {
      const token = localStorage.getItem("authToken");
      const response = await axios.get("/users/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUser(response.data.user);
    } catch (error: any) {
      if (error instanceof AxiosError) {
        const status = error.response?.status;
        if (status === 401) {
          setError("Sesi Anda telah habis. Silakan login kembali.");
        } else {
          setError(error.response?.data?.message || "Gagal mengambil profil");
        }
      } else {
        setError("Terjadi kesalahan saat mengambil profil");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSave = async (updatedUser: {
    id: string;
    name: string;
    email: string;
    imageUrl: string | null;
    oldPassword?: string;
    newPassword?: string;
    confirmPassword?: string;
  }) => {
    try {
      const token = localStorage.getItem("authToken");

      const formData = new FormData();
      formData.append("name", updatedUser.name);
      formData.append("email", updatedUser.email);

      if (
        updatedUser.oldPassword &&
        updatedUser.newPassword &&
        updatedUser.confirmPassword
      ) {
        formData.append("oldPassword", updatedUser.oldPassword);
        formData.append("newPassword", updatedUser.newPassword);
        formData.append("confirmPassword", updatedUser.confirmPassword);
      }

      if (imageFile) {
        formData.append("image", imageFile);
      }
      const response = await axios.put("/users/profile", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        setUser(response.data.user);
        setShowSuccess(true);
        setEditMode(false);
        setImagePreview(null);
        setImageFile(null);
      }
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message || "Gagal menyimpan perubahan profil";
      toast.error(errorMessage);
      console.error("Error detail:", error.response?.data || error.message);
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
      <div className="flex bg-red-600 text-white px-[100px] py-[21.5px] space-x-[3.5px]">
        <MdArrowBackIos
          className="text-[24px] cursor-pointer"
          onClick={() => router.push("/")}
        />
        <h1 className="text-lg font-semibold">Profil</h1>
      </div>
      <div className="pt-[24px] px-[146px]">
        <div className="flex flex-col md:flex-row space-x-[100px]">
          <div className="w-full md:w-1/3 flex flex-col items-center">
            <div className="relative w-[240px] h-[240px]">
              <Image
                src={imagePreview || user.imageUrl || "/default-avatar.png"}
                alt="Avatar"
                fill
                className="rounded-full object-cover"
              />
            </div>
            {editMode && (
              <div className="mt-4">
                <label
                  htmlFor="file-input"
                  className="text-red-500 cursor-pointer text-sm"
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
              </div>
            )}
          </div>

          <div className="bg-white rounded-lg shadow p-6 mt-4 md:mt-0 md:ml-6 w-full">
            {!editMode ? (
              <>
                <h2 className="text-[#E51C23] text-[20px] font-semibold mb-4">
                  Profil
                </h2>
                <div className="space-y-[12px] text-black">
                  <div>
                    <p className="text-[14px] font-medium text-[#8D7777]">
                      Nama
                    </p>
                    <p className="text-[16px]">{user.name}</p>
                  </div>
                  <div>
                    <p className="text-[14px] font-medium text-[#8D7777]">
                      Email
                    </p>
                    <p className="text-[16px]">{user.email}</p>
                  </div>
                  <div>
                    <p className="text-[14px] font-medium text-[#8D7777]">
                      Password
                    </p>
                    <p className="text-[16px]">{"•".repeat(10)}</p>
                  </div>
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
        {!editMode && (
          <div className="flex justify-end mt-[44px]">
            <button
              onClick={() => setEditMode(true)}
              className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 cursor-pointer"
            >
              Ubah Profil
            </button>
          </div>
        )}
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

/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BiSolidHide, BiSolidShow } from "react-icons/bi";
import axios from "@/lib/axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function RegisterPage() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agree, setAgree] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Password dan konfirmasi password tidak sama!");
      return;
    }

    if (password.length < 8) {
      toast.error("Password harus minimal 8 karakter.");
      return;
    }

    if (!agree) {
      toast.error("Harap setujui syarat & ketentuan.");
      return;
    }

    const form = e.target as HTMLFormElement;
    const name = (form[0] as HTMLInputElement).value;
    const email = (form[1] as HTMLInputElement).value;

    try {
      await axios.post("/auth/register", {
        name,
        email,
        password,
      });

      toast.success("Registrasi berhasil!");

      router.push("/login");
    } catch (error: any) {
      console.error(error);
      toast.error(error?.response?.data?.message || "Registrasi gagal.");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center text-black">
      <div className="w-full max-w-md p-6">
        <div className="flex justify-center mb-6">
          <Image src="/logo.png" alt="Pokemon" width={200} height={80} />
        </div>

        <div className="border border-gray-300 rounded-md p-6">
          <h2 className="text-red-600 text-lg font-semibold mb-4">Daftar</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
          
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Nama
            </label>
            <input
              type="text"
              placeholder="Masukan Nama"
              className="w-full rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-400 bg-[#FFF8F8]"
              required
            />

            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>

            <input
              type="email"
              placeholder="Masukkan Email"
              className="w-full rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-400 bg-[#FFF8F8]"
              required
            />

            <div className="relative">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Masukkan Password"
                className="w-full rounded-md px-3 py-2 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-red-400 bg-[#FFF8F8]"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="absolute right-3 top-[70%] -translate-y-1/2 flex items-center text-[#E51C23] cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
                tabIndex={-1}
              >
                {showPassword ? <BiSolidShow /> : <BiSolidHide />}
              </button>
            </div>

            <div className="relative mt-4">
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Konfirmasi Password
              </label>
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Masukkan Konfirmasi Password"
                className="w-full rounded-md px-3 py-2 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-red-400 bg-[#FFF8F8]"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="absolute right-3 top-[70%] -translate-y-1/2 flex items-center text-[#E51C23] cursor-pointer"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                tabIndex={-1}
              >
                {showConfirmPassword ? <BiSolidShow /> : <BiSolidHide />}
              </button>
            </div>

            <div className="flex items-start text-sm">
              <input
                type="checkbox"
                id="agree"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
                className="mr-2 mt-1"
              />
              <label htmlFor="agree" className="text-gray-700">
                Dengan ini saya menyetujui semua{" "}
                <Link href="#" className="text-red-600 hover:underline">
                  Syarat & Ketentuan
                </Link>{" "}
                yang berlaku.
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition"
            >
              Daftar
            </button>
          </form>
        </div>

        <div className="text-center mt-4 text-sm">
          Sudah punya akun?{" "}
          <Link href="/login" className="text-red-600 hover:underline">
            Masuk
          </Link>
        </div>
      </div>
    </div>
  );
}

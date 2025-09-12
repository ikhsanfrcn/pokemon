/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BiSolidHide, BiSolidShow } from "react-icons/bi";
import axios from "@/lib/axios";
import { useRouter } from "next/navigation";
import { AxiosError } from "axios";
import ForgotPasswordModal from "./_components/forgotPassword";
import { toast } from "react-toastify";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const [forgotOpen, setForgotOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const email = (form[0] as HTMLInputElement).value;

    try {
      const response = await axios.post("/auth/login", {
        email,
        password,
      });

      toast.success("Login berhasil!");
      console.log(response.data);

      router.push("/");
    } catch (error: any) {
      if (error instanceof AxiosError) {
        const status = error.response?.status;

        if (status === 400 || status === 401 || status === 404) {
          toast.error(error.response?.data?.message || "Email atau password salah.");
        } else {
          toast.error("Terjadi kesalahan server. Coba lagi nanti.");
        }
      } else {
        toast.error("Terjadi error tak terduga.");
      }
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center text-black">
      <div className="w-full max-w-md p-6">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <Image src="/logo.png" alt="Pokemon" width={200} height={80} />
        </div>

        {/* Card */}
        <div className="border border-gray-300 rounded-md p-6">
          <h2 className="text-red-600 text-lg font-semibold mb-4">Masuk</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email */}
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

            {/* Password */}
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
                className="w-full rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-400 bg-[#FFF8F8]"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="absolute right-3 top-8 text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <BiSolidShow /> : <BiSolidHide />}
              </button>
            </div>

            {/* Lupa Password */}
            <div className="flex justify-end text-sm">
              <button
                type="button"
                onClick={() => setForgotOpen(true)}
                className="text-red-600 hover:underline"
              >
                Lupa Password?
              </button>
            </div>

            <ForgotPasswordModal
              isOpen={forgotOpen}
              onClose={() => setForgotOpen(false)}
            />

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition"
            >
              Masuk
            </button>
          </form>
        </div>

        {/* Register */}
        <div className="text-center mt-4 text-sm">
          Belum punya akun?{" "}
          <Link href="/register" className="text-red-600 hover:underline">
            Daftar Sekarang
          </Link>
        </div>
      </div>
    </div>
  );
}

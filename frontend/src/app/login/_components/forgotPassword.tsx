/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Modal from "@/components/modal";
import axios from "@/lib/axios";
import { AxiosError } from "axios";
import { useState } from "react";
import Image from "next/image";
import { toast } from "react-toastify";

interface ForgotPasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ForgotPasswordModal({
  isOpen,
  onClose,
}: ForgotPasswordModalProps) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleResetPassword = async () => {
    if (!email) {
      toast.error("Email wajib diisi!");
      return;
    }

    try {
      setLoading(true);
      await axios.post("/auth/request-reset", { email });

      setSuccess(true);
      setEmail("");
    } catch (error: any) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data?.message || "Email tidak ditemukan!");
      } else {
        toast.error("Terjadi kesalahan, coba lagi.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      {!success ? (
        <>
          <h2 className="text-center text-red-600 text-lg font-semibold mb-2">
            Lupa Password?
          </h2>
          <p className="text-center text-sm text-gray-600 mb-4">
            Kami akan mengirim instruksi melalui email untuk mengganti password.
            Silakan masukkan email kamu.
          </p>

          <div className="space-y-4">
            <input
              type="email"
              placeholder="Masukkan Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded-md px-3 py-2"
            />
            <button
              type="button"
              onClick={handleResetPassword}
              disabled={loading}
              className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 disabled:bg-gray-400"
            >
              {loading ? "Mengirim..." : "Reset Password"}
            </button>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center text-center space-y-4">
          <Image
            src="/pikachu.png"
            alt="Pikachu"
            width={120}
            height={120}
          />
          <h2 className="text-red-600 text-lg font-semibold">
            Email Sudah Dikirim
          </h2>
          <p className="text-sm text-gray-600">
            Silakan cek email kamu untuk melakukan proses pergantian password
            yang baru.
          </p>
          <button
            type="button"
            onClick={() => {
              setSuccess(false);
              onClose();
            }}
            className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700"
          >
            Tutup
          </button>
        </div>
      )}
    </Modal>
  );
}

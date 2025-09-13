"use client";

import Modal from "@/components/modal";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
  description: string;
}

export default function SuccessModal({
  isOpen,
  onClose,
  message,
  description,
}: SuccessModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 className="text-center text-red-600 text-lg font-semibold mb-2">
        {message}
      </h2>
      <p className="text-center text-sm text-gray-600 mb-4">{description}</p>
      <button
        type="button"
        onClick={onClose}
        className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 cursor-pointer"
      >
        Tutup
      </button>
    </Modal>
  );
}

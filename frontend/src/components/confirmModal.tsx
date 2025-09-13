"use client";

import Modal from "@/components/modal";

interface ConfirmModalProps {
  isOpen: boolean;
  onCancel: () => void;
  onConfirm: () => void;
  message: string;
  description: string;
  confirmText: string;
  confirmDisabled: boolean;
}

export default function ConfirmModal({
  isOpen,
  onCancel,
  onConfirm,
  message,
  description,
  confirmText,
  confirmDisabled,
}: ConfirmModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onCancel}>
      <div className="text-center">
        <h2 className="text-lg font-semibold mb-4 text-[#E51C23]">{message}</h2>
        <p>{description}?</p>
        <div className="mt-6 flex justify-center gap-4">
          <button
            onClick={onCancel}
            className="px-4 py-2 border border-red-500 text-red-500 rounded-lg cursor-pointer"
          >
            Batal
          </button>
          <button
            onClick={onConfirm}
            disabled={confirmDisabled}
            className={`px-4 py-2 rounded-lg ${confirmDisabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-red-500 text-white cursor-pointer'}`}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </Modal>
  );
}

"use client";
import type { PokemonDetail } from "@/type/pokemonDetail";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { MdArrowBackIos } from "react-icons/md";
import { useState } from "react";
import axios from "@/lib/axios";
import { BsThreeDotsVertical } from "react-icons/bs";
import { toast } from "react-toastify";
import SuccessModal from "@/components/successModal";
import ConfirmModal from "@/components/confirmModal";

export default function PokemonDetail({ pokemon }: { pokemon: PokemonDetail }) {
  const router = useRouter();

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [confirmModalOpen, setConfirmModalOpen] = useState(false);
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    try {
      setLoading(true)
      await axios.delete(`/pokemons/${pokemon.id}`);
      setConfirmModalOpen(false);
      setSuccessModalOpen(true);
    } catch (error) {
      console.error(error);
      toast.error("Terjadi kesalahan saat menghapus.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      <div className="flex justify-between bg-[#E51C23] text-white px-[100px] py-[21.5px] space-x-[3.5px]">
        <div className="flex">
          <MdArrowBackIos
            className="text-[24px] cursor-pointer"
            onClick={() => router.push("/")}
          />
          <h1 className="text-lg font-semibold">Detail Pokemon</h1>
        </div>
        <div className="relative">
          <BsThreeDotsVertical
            onClick={() => setDropdownOpen((prev) => !prev)}
            className="text-white text-2xl focus:outline-none cursor-pointer"
          ></BsThreeDotsVertical>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg z-50">
              <button
                onClick={() => {
                  setDropdownOpen(false);
                  if (pokemon.id) {
                    router.push(`/pokemon/${pokemon.id}/edit`);
                  } else {
                    toast.error("ID Pokemon tidak ditemukan");
                  }
                }}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:rounded-md cursor-pointer"
              >
                Edit
              </button>

              <button
                onClick={() => {
                  setDropdownOpen(false);
                  setConfirmModalOpen(true);
                }}
                className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-100 hover:rounded-md cursor-pointer"
              >
                Delete
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-8 px-[146px]">
        <div className="w-full md:w-1/3 flex flex-col items-center">
          <div className="relative w-60 h-60">
            <Image
              src={pokemon.imageUrl}
              alt={pokemon.name}
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div className="w-full md:w-2/3 flex flex-col gap-6">
          <div className="bg-white shadow rounded-xl p-6">
            <h2 className="text-lg font-bold text-red-600 mb-4">
              Informasi Umum
            </h2>

            <p className="text-sm text-[#8D7777]">Nomor</p>
            <p className="font-semibold mb-2 text-[#453E3E]">
              #{pokemon.number}
            </p>

            <p className="text-sm text-[#8D7777]">Nama</p>
            <p className="font-semibold mb-2 text-[#453E3E]">{pokemon.name}</p>

            <p className="text-sm text-[#8D7777]">Types</p>
            <div className="flex gap-2 mb-2">
              {pokemon.types.map((t) => (
                <span
                  key={t.id}
                  className={`px-3 py-1 rounded-md text-sm font-medium ${
                    t.type.name === "Grass"
                      ? "bg-green-500 text-white"
                      : t.type.name === "Poison"
                      ? "bg-purple-600 text-white"
                      : "bg-gray-300 text-gray-800"
                  }`}
                >
                  {t.type.name}
                </span>
              ))}
            </div>

            <p className="text-sm text-[#8D7777]">Classification</p>
            <p className="font-semibold mb-2 text-[#453E3E]">
              {pokemon.classification.name}
            </p>

            <p className="text-sm text-[#8D7777]">Resistant</p>
            <div className="flex flex-wrap gap-2 mt-1">
              {(pokemon.resistances ?? []).map((r) => (
                <span
                  key={r.id}
                  className="px-3 py-1 rounded-md text-sm font-medium bg-gray-700 text-white"
                >
                  {r.resistance.name}
                </span>
              ))}
            </div>
          </div>

          {pokemon.evolutions.length > 0 && (
            <div className="bg-white shadow rounded-xl p-6">
              <h2 className="text-lg font-bold text-red-600 mb-4">Evolution</h2>
              <div className="flex flex-col gap-4">
                {pokemon.evolutions.map((evo) => (
                  <div
                    key={evo.id}
                    className="flex items-center gap-4 bg-pink-50 rounded-lg p-3"
                  >
                    <div className="relative w-16 h-16">
                      <Image
                        src={evo.toPokemon.imageUrl}
                        alt={evo.toPokemon.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">
                        #{evo.toPokemon.number}
                      </p>
                      <p className="font-semibold text-red-600">
                        {evo.toPokemon.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <ConfirmModal
        isOpen={confirmModalOpen}
        onCancel={() => setConfirmModalOpen(false)}
        onConfirm={async () => {
          setConfirmModalOpen(false);
          await handleDelete();
        }}
        message="Hapus"
        description={`Apakah kamu yakin mau menghapus ${pokemon.name}`}
        confirmText={loading ? "Loading..." : "Hapus"}
        confirmDisabled={loading}
      />

      <SuccessModal
        isOpen={successModalOpen}
        onClose={() => {
          setSuccessModalOpen(false);
          router.push("/");
        }}
        message="Berhasil Dihapus"
        description={`${pokemon.name} berhasil dihapus`}
      />
    </div>
  );
}

/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState, useEffect } from "react";
import { MdArrowBackIos } from "react-icons/md";
import { useRouter } from "next/navigation";
import axios from "@/lib/axios";
import { toast } from "react-toastify";
import ConfirmModal from "@/components/confirmModal";
import SuccessModal from "@/components/successModal";
import ImageUpload from "./_components/imageUpload";
import GeneralInfo from "./_components/generalInfo";
import TypeSelector from "./_components/typeSelector";
import ResistanceSelector from "./_components/resistanceSelector";
import EvolutionModal from "./_components/evolutionModal";
import EvolutionSection from "./_components/evolutionSection";
import { typeColors } from "@/type/color";

export default function AddPokemonPage() {
  const [number, setNumber] = useState(0);
  const [name, setName] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const [classificationId, setClassificationId] = useState<number | null>(null);
  const [classifications, setClassifications] = useState<any[]>([]);
  const [types, setTypes] = useState<any[]>([]);
  const [resistances, setResistances] = useState<any[]>([]);
  const [pokemons, setPokemons] = useState<any[]>([]);

  const [typeIds, setTypeIds] = useState<number[]>([]);
  const [resistanceIds, setResistanceIds] = useState<number[]>([]);
  const [evolutionIds, setEvolutionIds] = useState<number[]>([]);

  const [isEvolutionModalOpen, setIsEvolutionModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const fetchSelectors = async () => {
      try {
        const [cls, typesRes, res, nextNum, pkm] = await Promise.all([
          axios.get("/classifications"),
          axios.get("/types"),
          axios.get("/resistances"),
          axios.get("/pokemons/next-number"),
          axios.get("/pokemons"),
        ]);

        setClassifications(cls.data);
        setTypes(typesRes.data);
        setResistances(res.data);
        setPokemons(pkm.data);

        setNumber(nextNum.data?.number ?? 0);
      } catch (error) {
        toast.error("Gagal fetch selector");
      }
    };
    fetchSelectors();
  }, []);

  const handleSubmit = async () => {
    try {
      if (!imageFile) {
        toast.error("Silakan pilih gambar");
        return;
      }
      if (!classificationId) {
        toast.error("Silakan pilih classification terlebih dahulu");
        return;
      }
      if (!name) {
        toast.error("Nama harus di isi");
        return;
      }
      const token = localStorage.getItem("authToken");
      const formData = new FormData();
      formData.append("image", imageFile);
      formData.append("number", String(number));
      formData.append("name", name);
      formData.append("classificationId", String(classificationId ?? ""));
      formData.append("typeIds", JSON.stringify(typeIds));
      formData.append("resistanceIds", JSON.stringify(resistanceIds));
      formData.append("evolutionIds", JSON.stringify(evolutionIds));

      setLoading(true);

      const res = await axios.post("/pokemons", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.status === 201) {
        setIsConfirmModalOpen(false);
        setIsSuccessModalOpen(true);
        resetForm();
      }
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Gagal tambah Pokemon");
    } finally {
      setLoading(false);
    }
  };

  const handleOnClose = () => {
    setIsSuccessModalOpen(false);
    router.push("/")
  }

  const resetForm = () => {
    setName("");
    setImageFile(null);
    setImagePreview(null);
    setClassificationId(null);
    setTypeIds([]);
    setResistanceIds([]);
    setEvolutionIds([]);
  };

  return (
    <div>
      <div className="flex bg-red-600 text-white px-20 py-5">
        <MdArrowBackIos
          className="text-2xl cursor-pointer"
          onClick={() => router.push("/")}
        />
        <h1 className="text-lg font-semibold">Tambah Baru</h1>
      </div>

      <div className="flex gap-20 px-36 py-8">
        <ImageUpload
          imagePreview={imagePreview}
          setImagePreview={setImagePreview}
          setImageFile={setImageFile}
        />

        <div className="flex-1 space-y-6">
          <div className="bg-white p-6 rounded-xl shadow">
            <GeneralInfo
              number={number}
              name={name}
              setName={setName}
              classificationId={classificationId}
              setClassificationId={setClassificationId}
              classifications={classifications}
            />

            <TypeSelector
              types={types}
              typeIds={typeIds}
              setTypeIds={setTypeIds}
              typeColors={typeColors}
            />

            <ResistanceSelector
              resistances={resistances}
              resistanceIds={resistanceIds}
              setResistanceIds={setResistanceIds}
            />
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <EvolutionSection
              pokemons={pokemons}
              evolutionIds={evolutionIds}
              onOpenModal={() => setIsEvolutionModalOpen(true)}
            />
          </div>

          <div className="flex justify-end gap-3">
            <button
              onClick={resetForm}
              className="px-4 py-2 border border-red-500 text-red-500 rounded-lg cursor-pointer"
            >
              Batal
            </button>
            <button
              onClick={() => setIsConfirmModalOpen(true)}
              className="px-4 py-2 bg-red-500 text-white rounded-lg cursor-pointer"
            >
              Tambah
            </button>
          </div>
        </div>
      </div>

      <EvolutionModal
        pokemons={pokemons}
        evolutionIds={evolutionIds}
        setEvolutionIds={setEvolutionIds}
        isOpen={isEvolutionModalOpen}
        onClose={() => setIsEvolutionModalOpen(false)}
      />

      <ConfirmModal
        isOpen={isConfirmModalOpen}
        onCancel={() => setIsConfirmModalOpen(false)}
        onConfirm={handleSubmit}
        message="Tambah"
        description={`Apakah kamu yakin mau menambahkan ${name}`}
        confirmText={loading ? "Loading..." : "Tambah"}
        confirmDisabled={loading}
      />

      <SuccessModal
        isOpen={isSuccessModalOpen}
        onClose={() => handleOnClose()}
        message="Berhasil!"
        description={`${name} berhasil ditambahkan`}
      />
    </div>
  );
}

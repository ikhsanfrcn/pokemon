/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState, useEffect } from "react";
import { MdArrowBackIos } from "react-icons/md";
import { useRouter, useParams } from "next/navigation";
import axios from "@/lib/axios";
import { toast } from "react-toastify";
import ConfirmModal from "@/components/confirmModal";
import SuccessModal from "@/components/successModal";
import { typeColors } from "@/type/color";
import ImageUpload from "../../create/_components/imageUpload";
import GeneralInfo from "../../create/_components/generalInfo";
import TypeSelector from "../../create/_components/typeSelector";
import ResistanceSelector from "../../create/_components/resistanceSelector";
import EvolutionSection from "../../create/_components/evolutionSection";
import EvolutionModal from "../../create/_components/evolutionModal";

export default function EditPokemonPage() {
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
  const params = useParams();
  const id = params?.slug;

  useEffect(() => {
    const fetchSelectors = async () => {
      try {
        const [cls, typesRes, res, pkm] = await Promise.all([
          axios.get("/classifications"),
          axios.get("/types"),
          axios.get("/resistances"),
          axios.get("/pokemons"),
        ]);

        setClassifications(cls.data);
        setTypes(typesRes.data);
        setResistances(res.data);
        setPokemons(pkm.data);
      } catch (error) {
        toast.error("Gagal fetch selector");
      }
    };
    fetchSelectors();
  }, []);

  useEffect(() => {
    const fetchPokemon = async () => {
      if (!id) return;
      try {
        const res = await axios.get(`/pokemons/${id}`);
        const data = res.data;

        setNumber(data.number);
        setName(data.name);
        setClassificationId(data.classificationId);
        setTypeIds(data.types.map((t: any) => t.typeId));
        setResistanceIds(data.resistances.map((r: any) => r.resistanceId));
        setEvolutionIds(data.evolutions.map((e: any) => e.toPokemonId));
        setImagePreview(data.imageUrl);
      } catch (error) {
        toast.error("Gagal ambil data Pokemon");
      }
    };

    fetchPokemon();
  }, [id]);

  const handleSubmit = async () => {
    try {
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

      if (imageFile) {
        formData.append("image", imageFile);
      }
      formData.append("number", String(number));
      formData.append("name", name);
      formData.append("classificationId", String(classificationId ?? ""));
      formData.append("typeIds", JSON.stringify(typeIds));
      formData.append("resistanceIds", JSON.stringify(resistanceIds));
      formData.append("evolutionIds", JSON.stringify(evolutionIds));

      setLoading(true);

      const res = await axios.put(`/pokemons/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.status === 200) {
        setIsConfirmModalOpen(false);
        setIsSuccessModalOpen(true);
      }
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Gagal update Pokemon");
    } finally {
      setLoading(false);
    }
  };

  const handleOnClose = () => {
    setIsSuccessModalOpen(false);
    router.push("/");
  };

  return (
    <div>
      <div className="flex bg-red-600 text-white px-20 py-5">
        <MdArrowBackIos
          className="text-2xl cursor-pointer"
          onClick={() => router.push("/")}
        />
        <h1 className="text-lg font-semibold">Edit Pokemon</h1>
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
              onClick={() => router.push("/")}
              className="px-4 py-2 border border-red-500 text-red-500 rounded-lg cursor-pointer"
            >
              Batal
            </button>
            <button
              onClick={() => setIsConfirmModalOpen(true)}
              className="px-4 py-2 bg-red-500 text-white rounded-lg cursor-pointer"
            >
              Simpan Perubahan
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
        message="Update"
        description={`Apakah kamu yakin mau mengupdate ${name}?`}
        confirmText={loading ? "Loading..." : "Update"}
        confirmDisabled={loading}
      />

      <SuccessModal
        isOpen={isSuccessModalOpen}
        onClose={handleOnClose}
        message="Berhasil!"
        description={`${name} berhasil diupdate`}
      />
    </div>
  );
}

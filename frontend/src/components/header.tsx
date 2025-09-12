import Image from "next/image";
import { FaPlus } from "react-icons/fa6";

export default function Header() {
  return (
    <div className="flex justify-between items-center bg-[#E51C23] px-[60px] py-[32px]">
      <Image
        src="/logo.png"
        width={0}
        height={0}
        sizes="100"
        alt="pokemon-logo"
        className="w-[163.06px] h-[60px]"
      />
      <FaPlus className="text-[40px]" />
    </div>
  );
}

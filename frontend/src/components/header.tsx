import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaRegUserCircle } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function Header() {
  const router = useRouter();
  const [authToken, setAuthToken] = useState<string | null>(null);
  const token = localStorage.getItem("authToken");

  useEffect(() => {
    setAuthToken(token);
  }, [token]);

  const handleLogout = () => {
    if (token) {
      localStorage.removeItem("authToken");
      setAuthToken(null);
      toast.success("Logout berhasil.");
    } else {
      toast.error("Anda belum login.");
    }
  };

  const handleUserIconClick = () => {
    if (authToken) {
      router.push("/profile");
    } else {
      router.push("/login");
    }
  };

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
      <div className="flex space-x-[24px]">
        <FaRegUserCircle
          className="text-[40px] cursor-pointer"
          onClick={handleUserIconClick}
        />
        {token && (
          <MdLogout
            className="text-[40px] cursor-pointer"
            onClick={handleLogout}
          />
        )}
      </div>
    </div>
  );
}

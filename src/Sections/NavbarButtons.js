"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { LuWallet2, LuSun } from "react-icons/lu";
import { FaUser, FaMoon } from "react-icons/fa";
import PopupModel from "@/components/LoginPopup";
import Image from 'next/image';
import { Input } from "@/components/ui/input";
import Logo from "@/app/Images/logo.png";
import { useContext } from 'react';
import { AccountContext } from '../context/context';

const NavbarButtons = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const { account, connectWallet } = useContext(AccountContext);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const handleClick = () => {
    console.log("Button clicked"); // Debugging line
    connectWallet();
  };

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  const PopupContent = () => (
    <>
      <div className="flex justify-center">
        <Image src={Logo} alt="RareLux Logo" className="w-20 py-4" />
      </div>
      <button className="bg-[#f6851b] py-2 rounded-md text-white w-full hover:bg-[#cd6116]" onClick={handleClick} type="submit">
        Login From MetaMask
      </button>
      <div className="flex justify-center my-2">
          <span>Or</span>
        
      </div>
      <Input placeholder="Email" type="email" className="h-12 outline-none w-full mb-2" />
      <button className="bg-blue-500 py-2 rounded-md text-white w-full" type="submit">
        Login From Email
      </button>
    </>
  );

  const IconButton = ({ icon, onClick }) => (
    <button
      className="bg-gray-200 flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 dark:bg-gray-800 mr-2"
      onClick={onClick}
    >
      {icon}
    </button>
  );

  return (
    <div className="flex justify-center items-center">
      <IconButton icon={theme === "dark" ? <LuSun size={24} /> : <FaMoon size={24} />} onClick={toggleTheme} />
      <PopupModel title="Connect To RareLux" button={<IconButton icon={<LuWallet2 size={24} />} />}>
        <PopupContent />
      </PopupModel>
      <PopupModel title="Connect To RareLux" button={<IconButton icon={<FaUser size={24} />} />}>
        <PopupContent />
      </PopupModel>
    </div>
  );
};

export default NavbarButtons;

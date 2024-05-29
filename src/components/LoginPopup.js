"use client";

import React, { useContext } from "react";
import PopupModel from "./PopupModel";
import { Input } from "./ui/input";
import Image from "next/image";
import Logo from "@/app/Images/logo.png";
import { AccountContext } from '../context/context';

const LoginPopup = (props) => {
  const { connectWallet } = useContext(AccountContext);
  const { button } = props;

  const handleClick = async () => {
    console.log("Button clicked"); // Debugging line
    await connectWallet();
  };

  return (
    <PopupModel title="Connect To RareLux" button={button}>
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
    </PopupModel>
  );
};

export default LoginPopup;

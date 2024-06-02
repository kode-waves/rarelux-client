"use client";

import React, { useContext } from "react";
import PopupModel from "./PopupModel";
import { Input } from "./ui/input";
import Image from "next/image";
import Logo from "@/app/Images/logo.png";
import metaMask from "@/app/Images/metaMask.png";
import { AccountContext } from '../context/context';

const LoginPopup = (props) => {
  const { connectWallet } = useContext(AccountContext);
  const { button } = props;

  const handleClick = async () => {
    await connectWallet();
  };

  return (
    <PopupModel title="Connect To RareLux" button={button}>
      <div className="flex justify-center">
        <Image src={Logo} alt="RareLux Logo" className="w-20 py-4" />
      </div>
      <button className="py-2 flex rounded-md  bg-gray-800 hover:bg-gray-900 dark:text-darkModeColor text-white justify-center items-center dark:bg-gray-100 dark:hover:bg-gray-300 w-full " onClick={handleClick} type="submit">
       <Image src={metaMask} alt="metamask" className="w-10 mr-4" /> Connect with MetaMask
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

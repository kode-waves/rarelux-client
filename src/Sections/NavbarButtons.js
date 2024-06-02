"use client"; // Ensure the code runs in the client-side environment

import { useState, useEffect, useContext } from "react";
import { useTheme } from "next-themes"; // Theme management hook
import { LuWallet2, LuSun } from "react-icons/lu"; // Wallet and sun icons
import { FaUser, FaMoon } from "react-icons/fa"; // User and moon icons
import { AccountContext } from '../context/context'; // Account management context
import LoginPopup from "@/components/LoginPopup"; // LoginPopup component
import Image from "next/image";
import Logo from "@/app/Images/logo.png";
import PopupModel from "@/components/PopupModel"; // Popup model component
import NextHoverCard from "@/components/HoverCard"; // Hover card component
import storage from "@/lib/localstorage"; // Local storage utility


const NavbarButtons = () => {
  const [mounted, setMounted] = useState(false); // Check if the component is mounted
  const [load, setLoad] = useState(false); // Trigger re-render
  const [address, setAddress] = useState(storage.Get('account')); // Address from local storage
  const [balance, setBalance] = useState(storage.Get('wallet')); // Wallet balance from local storage
  const { account, walletBalance, connectWallet, setAccount } = useContext(AccountContext); // Context state and functions
  const { theme, setTheme } = useTheme(); // Theme management

  // Set mounted state and load data from local storage on mount
  useEffect(() => {
    setMounted(true);
    setAddress(storage.Get('account'));
    setBalance(storage.Get('wallet'));
    setLoad(false);
  }, [load]);

  if (!mounted) return null; // Return null if the component is not yet mounted

  // Toggle between dark and light themes
  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  // Handle logout and clear local storage
  const handleLogout = () => {
    console.log("ButtonClicked")
    storage.Delete('account');
    storage.Delete('wallet');
    setAccount(null)
    setLoad(true);
  };

  return (
    <div className="flex justify-center items-center">
      {/* Toggle theme button */}
      <IconButton
        icon={theme === "dark" ? <LuSun size={24} /> : <FaMoon size={24} />}
        onClick={toggleTheme}
      />
      {/* Wallet connect button with popup */}
      {account || balance ? (
        <PopupModel
          title="Your Wallet"
          button={<IconButton icon={<LuWallet2 size={24} />} />}
        >
          <h1>Your Wallet balance: {walletBalance ? walletBalance : balance}</h1>
        </PopupModel>
      ) : (
        <LoginPopup
          button={<IconButton icon={<LuWallet2 size={24} />} />}
          connectWallet={connectWallet}
        />
      )}
      {/* User login button with popup */}
      {account || address ? (
        <NextHoverCard button={<button>
          <Image src={Logo} alt="Image" className="w-10 " />
        </button>} hoverBodyclassName="w-auto">
          <DropdownButtons  name="Dashboard"/>
          <DropdownButtons  name="Notifications"/>
          <DropdownButtons  name="Messages"/>
          <DropdownButtons  name="Settings"/>
          <DropdownButtons onClick={handleLogout} name="Logout"/>

        </NextHoverCard>
      ) : (
        <LoginPopup
          button={<IconButton icon={<FaUser size={24} />} />}
          connectWallet={connectWallet}
        />
      )}
    </div>
  );  
};

export default NavbarButtons;

// Reusable icon button component
const IconButton = ({ icon, onClick }) => (
  <button
    className="bg-gray-200 flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 dark:bg-gray-800 mr-2"
    onClick={onClick}
  >
    {icon}
  </button>
);

const DropdownButtons = (props) => {
  const {name, onClick} = props
  return(
    <button onClick={onClick} className="flex py-2 hover:bg-gray-500 w-36 px-5 ">{name}</button>
  )
}
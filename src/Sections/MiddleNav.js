"use client";

import React, { useContext, useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import Link from 'next/link';
import LoginPopup from "@/components/LoginPopup";
import { AccountContext } from '../context/context';
import storage from "@/lib/localstorage";
import { usePathname } from 'next/navigation';
import Redirects from "./Redirects";

const MiddleNav = () => {
  const { account, connectWallet } = useContext(AccountContext);
  const pathname = usePathname(); // Get the current pathname
  console.log("🚀 ~ Navbar ~ pathname:", pathname)
  const [mounted, setMounted] = useState(false); // State to check if component is mounted
  const [address, setAddress] = useState(null);

  // Set mounted state to true after component mounts
  useEffect(() => {
    setMounted(true);
    setAddress(storage.Get('account'));
  }, []);

  // If component is not yet mounted, render nothing
  if (!mounted) return null;

  // Handler for connect wallet button
  const handleClick = () => {
    connectWallet();
  };

  return (
    <div className="flex justify-center items-center bg-blur">
      <div className="flex bg-gray-400 dark:bg-gray-400 rounded-full">
        <div className="bg-gray-400 p-2 rounded-full">
          <FaSearch className="text-white" />
        </div>
        <div>
          <input className="border-0 focus:outline-none text-white bg-gray-400 dark:bg-gray-400 w-96 h-8 mr-4" />
        </div>
      </div>
   <div className="hidden lg:block">
    <Redirects />
   </div>
    </div>
  );
};

const Redirect = (props) => {
  const { link, name, pathname } = props;
  console.log("pathname == link ------------",pathname,link,pathname == link )
  return(
    <div className="w-20 flex justify-center">
    <Link href={link} className={`cursor-pointer  ${pathname == link ? "text-customBlue dark:text-gray-200" : "text-gray-700  dark:text-gray-500 hover:text-customBlue dark:hover:text-gray-200"}`}>
      {name}
    </Link>
  </div>

  )
};

export default MiddleNav;

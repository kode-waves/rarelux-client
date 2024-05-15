
"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
//Icons
import { LuWallet2, LuSun } from "react-icons/lu";
import { FaUser } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";

const NavbarButtons = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);


  if (!mounted) {
    return null;
  }

  const icons = [<FaMoon size={24} />, <LuWallet2 size={24} />, <FaUser size={24} />];

  return (
    <>
    <div className="flex justify-center items-center">
      {icons.map((Icon, index) => (
        <div key={index} className="inline-block mr-2">
          <button className="bg-gray-200 flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 dark:bg-gray-800" onClick={() => setTheme(index == 0 ? theme === "dark" ? "light" : "dark": theme)}>
            {index == 0  && theme == 'dark' ? <LuSun size={24} /> : Icon}
          </button>
        </div>
      ))}
    </div>
      </>
  );
}

export default NavbarButtons;

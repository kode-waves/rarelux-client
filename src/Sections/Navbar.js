"use client"; // Indicates that this component should be rendered on the client side
import React, { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation"; // Importing the router from next/navigation for client-side navigation
import Image from "next/image"; // Importing Next.js Image component for optimized image rendering
import MiddleNav from "@/Sections/MiddleNav"; // Importing the MiddleNav component
import NavbarButtons from "@/Sections/NavbarButtons"; // Importing the NavbarButtons component
import logo from "@/app/favicon.ico"; // Importing the logo image

const Navbar = () => {
  // State to keep track of the previous scroll position
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  // State to control the visibility of the navbar
  const [visible, setVisible] = useState(true);

  const router = useRouter(); // Initializing the router for navigation

  // Memoized scroll handler function to manage the navbar visibility based on scroll position
  const handleScroll = useCallback(() => {
    const currentScrollPos = window.scrollY; // Get the current scroll position
    const isVisible = prevScrollPos > currentScrollPos || currentScrollPos < 10; // Determine if the navbar should be visible

    setPrevScrollPos(currentScrollPos); // Update the previous scroll position
    setVisible(isVisible); // Update the visibility state
  }, [prevScrollPos]); // Dependency array ensures handleScroll is updated only when prevScrollPos changes

  // Effect to add and clean up the scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll); // Add scroll event listener

    return () => {
      window.removeEventListener("scroll", handleScroll); // Clean up the event listener on component unmount
    };
  }, [handleScroll]); // Dependency array ensures effect is run only when handleScroll changes

  // Function to handle navigation when an element is clicked
  const handleClick = () => {
    router.push("/"); // Navigate to the specified path
  };

  return (
    <header
      className={`px-12 pt-4 sticky top-0 z-50 transition-all duration-300 ease-in-out 
      ${visible ? "translate-y-0" : "-translate-y-full"}
       ${prevScrollPos > 0 ? "bg-gray-100 dark:bg-darkModeColor py-4" : ""}
       `}
    >
      <div className="flex justify-between max-w-custom w-full items-center m-auto">
        <Image
          src={logo}
          className="shrink-0 h-12 w-12 cursor-pointer" // Add cursor pointer for better UX
          alt="logo"
          onClick={handleClick} // Navigate to home on logo click
        />
        <div className="flex-grow flex justify-center items-center">
          <MiddleNav /> {/* Render the MiddleNav component */}
        </div>
        <div className="hidden lg:block">
          <NavbarButtons /> {/*  Render the NavbarButtons component */}
        </div>
      </div>
    </header>
  );
};

export default Navbar;

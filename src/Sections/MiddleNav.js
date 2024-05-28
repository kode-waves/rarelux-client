import React from "react";
import { FaSearch } from "react-icons/fa";
import Link from 'next/link'

const Navbar = () => {
    return (
        <div className="flex justify-center items-center bg-blur" >
            <div className="flex bg-gray-400 dark:bg-gray-400 rounded-full">
            <div className="bg-gray-400 p-2 rounded-full ">
                <FaSearch className="text-white"/>
            </div>
            <div >
                <input className="border-0 focus:outline-none text-white bg-gray-400 dark:bg-gray-400 w-96 h-8 mr-4 dark:" />
            </div>
            </div>
            <div className="flex justify-between font-semibold pl-24">
                <Redirect  link={"/explore"} name="Explore"/>
                <Redirect  link={"/explore"} name="Stats"/>
                <Redirect  link={"/explore"} name="Create"/>
            </div>
        </div>
    )
}

const Redirect = (props) => {
   const {link, name} = props;
   return(
    <div className="w-20 flex justify-center">
    <Link href={link} className="cursor-pointer text-gray-700 dark:text-gray-500  hover:text-customBlue dark:hover:text-gray-200">{name}</Link>
</div>
   )
}


export default Navbar;
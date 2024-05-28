"use-client"
import React from "react";
import AvatarCard from "./AvatarCard";
import { FaCartPlus, FaHeart } from "react-icons/fa";

const Nftcard = (props) => {
    const { totalVol, name, src, floorPrice, coverSrc, rank } = props;

    return (
        <div className=" sm:w-48 md:w-44 lg:w-48 xl:w-56 2xl:w-60 h-80 rounded-2xl relative overflow-hidden cursor-pointer hover:shadow-lg group">
            <div className="absolute inset-0 transition-transform duration-500 ease-in-out group-hover:scale-105">
                <div
                    className="absolute inset-0 bg-cover bg-center h-[14rem]"
                    style={{ backgroundImage: `url(${coverSrc})` }}
                />
            </div>
            <div className="absolute inset-0 flex justify-end px-2 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                <div className="flex justify-center mx-1 items-center bg-blue-500 w-9 h-9 hover:bg-blue-800 rounded-full">
                    <FaHeart size={23} color="#FFF" />
                </div>
                <div className="flex justify-center mx-1 items-center bg-blue-500 hover:bg-blue-800 w-9 h-9 rounded-full">
                    <FaCartPlus size={23} color="#FFF" />
                </div>
            </div>
            <div className="absolute bottom-0 w-full flex flex-col justify-end bg-gray-200 dark:bg-gray-800 h-28">
                <div className="flex px-5 pt-2 items-center">
                    <AvatarCard name={name} src={src} className="w-10 h-10" heightWidth="h-10 w-10" />
                    <div>
                        <h5 className="dark:text-gray-100 text-gray-800 font-semibold  truncate text-md ml-4">{name}</h5>
                        <h5 className="dark:text-gray-300 text-gray-600 text-sm ml-4">#123</h5>
                    </div>
                </div>
                <div className="flex justify-between px-5 pb-4">
                    <div>
                        <h5 className="text-gray-400 text-sm md:text-[0.7rem]">Price</h5>
                        <h5 className="dark:text-gray-300 text-gray-600 font-semibold md:text-sm">{floorPrice}</h5>
                    </div>
                    <div>
                        <h5 className="text-gray-400 text-sm md:text-[0.7rem]">Previous price</h5>
                        <h5 className="dark:text-gray-300 text-gray-600 font-semibold">{totalVol}</h5>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Nftcard;

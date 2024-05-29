"use-client"
import React from "react";
import AvatarCard from "./AvatarCard";

const ProfileCard = (props) => {
  const { totalVol, name, src, floorPrice, coverSrc, headList, explore } = props;

  return (
    <div className={` ${explore ? "xl:w-72 md:w-56 lg:w-48  sm:w-48" : "xl:w-96 lg:w-72 md:w-80 sm:w-48 w-72"} ${headList ? "h-96":"h-60"}  rounded-2xl relative overflow-hidden cursor-pointer`}>
      <div
        className="absolute inset-0 flex flex-col justify-end w-auto overflow-hidden hover:scale-150"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${coverSrc})` }}
        />
      </div>
      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-gray-800 via-transparent ">
        <div className="flex xl:px-8 lg:px-2 md:px-2 sm:px-1 px-6 pt-10 items-center">
          <AvatarCard name={name} src={src} className="w-10 h-10" heightWidth="h-10 w-10" />
          <h5 className="text-gray-100 font-semibold xl:text-lg ml-4">{name}</h5>
        </div>
        <div className="flex justify-between xl:px-8 lg:px-2 md:px-2 px-6 sm:px-1 pb-4">
          <div>
            <h5 className="text-gray-400 truncate text-sm">Floor Price</h5>
            <h5 className="text-gray-100 font-medium">{floorPrice}</h5>
          </div>
          <div>
            <h5 className="text-gray-400 text-sm truncate">Total Volume</h5>
            <h5 className="text-gray-100 font-medium">{totalVol}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;

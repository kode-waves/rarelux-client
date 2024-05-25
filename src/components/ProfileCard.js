import React from "react";
import AvatarCard from "./AvatarCard";

const ProfileCard = (props) => {
  const { totalVol, name, src, floorPrice, coverSrc } = props;

  return (
    <div className="w-80 sm:w-96 h-60 rounded-2xl relative overflow-hidden cursor-pointer">
      <div
        className="absolute inset-0 bg-cover bg-center flex flex-col justify-end"
        style={{ backgroundImage: `url(${coverSrc})` }}
      />
      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-gray-800 via-transparent">
        <div className="flex h-24 px-8 pt-10 items-center">
          <AvatarCard name={name} src={src} className="w-10 h-10" heightWidth="h-10 w-10" />
          <h5 className="text-gray-100 font-semibold text-lg ml-4">{name}</h5>
        </div>
        <div className="flex justify-between px-8 pb-4">
          <div>
            <h5 className="text-gray-400 text-sm">Floor Price</h5>
            <h5 className="text-gray-100 font-medium">{floorPrice}</h5>
          </div>
          <div>
            <h5 className="text-gray-400 text-sm">Total Volume</h5>
            <h5 className="text-gray-100 font-medium">{totalVol}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;


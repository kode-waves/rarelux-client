"use client"
import React, { useState } from "react";
import ProfileCard from "@/components/ProfileCard";
import { JwelleriesData } from "@/lib";
import Dropdown from "@/components/Dropdown";
import Nftcard from "@/components/NFTcard";

const Explore = () => {
    const [position, setPosition] = useState(0);
    const desiredCount = 500;

    // Create extended data by repeating JwelleriesData until the desired count is reached
    const extendedData = Array.from({ length: desiredCount }, (_, index) => JwelleriesData[index % JwelleriesData.length]);

    const renderCards = (Component) => (
        <div className={`grid gap-5 ${position === 0 ? "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7" : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7"}`}>
            {extendedData.map((data, index) => (
                <Component
                    key={index}
                    totalVol={data.totalVol}
                    name={data.name}
                    src={data.src}
                    floorPrice={data.floorPrice}
                    coverSrc={data.coverSrc}
                    explore
                />
            ))}
        </div>
    );

    return (
        <div className="px-4 sm:px-8 md:px-12 ">
            <div className="flex justify-end pb-12">
                <Dropdown list={["AllNfts", "Collections"]} position={position} setPosition={setPosition} />
            </div>
            {position === 0 ? renderCards(Nftcard) : renderCards(ProfileCard)}
        </div>
    );
};

export default Explore;

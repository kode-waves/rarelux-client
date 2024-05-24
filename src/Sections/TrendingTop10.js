"use client"
//React imports
import React, { useState } from "react";
import { TrendingCard, Top10Data } from "@/lib";
import TrendingTop10Layout from "@/components/TrendingTop10Layout";
import HeadingButton from "@/components/HeadingButton";

const TrendingTop10 = () => {
    const [isActive, setIsActive] = useState(0);

    let data = isActive == 0 ? TrendingCard : Top10Data

    const halfLength = Math.ceil(data.length / 2);
    const firstHalf = data.slice(0, halfLength);
    const secondHalf = data.slice(halfLength);


    return (
        <>
            <div className="py-12">
                <div className="flex">
                    <HeadingButton name="Trending" onClick={() => setIsActive(0)} condition={isActive === 0} />
                    <HeadingButton name="Top10" onClick={() => setIsActive(1)} condition={isActive === 1} />
                </div>
            </div>
            <div className="py-5 overflow-auto bg-gray-100 rounded-xl  dark:bg-[#0C111A]">
                <div className="px-12">
                    <div className="flex justify-between ">
                        <div>
                            {firstHalf.map((trending, index) => (
                                <TrendingTop10Layout trending={trending} index={index} />
                            ))}
                        </div>
                        <div>
                            {secondHalf.map((trending, index) => (
                                <TrendingTop10Layout trending={trending} index={index} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}



export default TrendingTop10;

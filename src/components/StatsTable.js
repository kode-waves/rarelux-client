"use client";
import React, { useState, useEffect } from "react";
import AvatarCard from "./AvatarCard";

const StatsTable = (props) => {

   // Destructure props
   const { list } = props;

   // Initialize state for list data
   const [dataList, setDataList] = useState([]);

   // Set list data when component mounts on client side
   useEffect(() => {
       setDataList(list);
   }, [list]);

  return (
    // <div className="flex justify-center">
      <div className="w-full">

    <div className="flex pt-12 pb-5 pl-5 text-base font-semibold md:text-sm sm:text-sm">
        {/* Rank */}
        <div className="w-36 min-w-36 ">
          <h5 >Rank</h5>
        </div>

        {/* Collections */}
        <div className="w-1/4 min-w-72 lg:min-w-72 max-w-96 lg:max-w-96">
          <h5>Collections</h5>
        </div>

        {/* Volume */}
        <div className="w-96 min-w-[8rem]  max-w-60">
          <h5 >Volume</h5>
        </div>

        {/* FloorPrice */}
        <div className="w-96 min-w-[8rem]  max-w-60">
          <h5 >FloorPrice</h5>
        </div>

        {/* Sales */}
        <div className="w-96 min-w-[8rem]  max-w-60">
          <h5 >Sales</h5>
        </div>

        {/* Change */}
        <div className="w-96 min-w-[8rem]  max-w-60">
          <h5 >Change</h5>
        </div>

        {/* % uniqueOwners */}
        <div className="w-96 min-w-[8rem]  max-w-60">
          <h5 >% uniqueOwners</h5>
        </div>

        {/* % itemsListed */}
        <div className="w-96 min-w-[8rem]  max-w-60 ">
          <h5 >% itemsListed</h5>
        </div>
      </div>
      <hr className="min-w-96" />


{dataList.map((data, index) => {
  return (
      <div key={index} className="flex py-10 rounded-2xl pl-5 h-12 hover:bg-gray-100 dark:hover:bg-gray-900 text-sm">
        {/* Rank */}
        <div className="w-36 min-w-36 flex items-center">
          <h5 className="text-sm">#{data.rank}</h5>
        </div>

        {/* Collections */}
        <div className="w-1/4 min-w-72 max-w-96 flex items-center">
          <div>
         <AvatarCard name={data.collection} className="h-10 w-10" heightWidth="h-10 w-10" src={""}/>
            </div>
            <div>
         <h5 className="pl-2">{data.collection}</h5>
              </div>
        </div>

        {/* Volume */}
        <div className="w-96 min-w-[8rem] flex items-center  max-w-60">
          <h5 className="text-sm">{data.volume} </h5>
        </div>

        {/* FloorPrice */}
        <div className="w-96 min-w-[8rem] flex items-center  max-w-60">
          <h5 className="text-sm">{data.floorPrice}</h5>
        </div>

        {/* Sales */}
        <div className="w-96 min-w-[8rem] flex items-center  max-w-60">
          <h5 className="text-sm">{data.sales}</h5>
        </div>

        {/* Change */}
        <div className="w-96 min-w-[8rem] flex items-center max-w-60">
        <h5 className={`text-sm ${data.change.includes("-") ? 'text-red-500' : 'text-green-500'}`}>
                            {data.change}
                        </h5>
        </div>

        {/* % uniqueOwners */}
        <div className="w-96 min-w-[8rem] flex items-center  max-w-60">
            <div>
          <h5 className="text-sm">{data.uniqueOwnersPercentage}</h5>
          <h5 className="text-sm">{data.owners}</h5>
            </div>
        </div>

        {/* % itemsListed */}
        <div className="w-96 min-w-[8rem] flex items-center  max-w-60 ">
            <div>
          <h5 className="text-sm">{data.itemsListedPercentage}</h5>
          <h5 className="text-sm">{data.itemsListed}</h5>
            </div>
        </div>
      </div>
  )
})}
  </div>
    // </div>
  );
};

export default StatsTable;

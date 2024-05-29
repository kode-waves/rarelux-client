"use client"; // Indicates this component should be rendered on the client side
import React, { useState } from "react"; // Importing React
import Dropdown from "@/components/Dropdown";
import StatsTable from "@/components/StatsTable";
import { generateRandomDataList } from "@/lib";
// Define the Stats component
const Stats = () => {
  const [position, setPosition] = useState(0);

  const array = generateRandomDataList(100);
  return (
    <div className="px-12">
      <div className="flex justify-end">
        <Dropdown key={position} list={["Top ", "Trending ", "Watchlist "]} position={position} setPosition={setPosition} fixedName={"Collections"} />
      </div>
      {/* Top Collection */}
      {position == 0 &&  <StatsTable list={array} />}
      {/* Tredning Collection */}
      {position == 1 && <StatsTable list={array} />}
      {/* WatchList Collection */}
      {position == 2 && <StatsTable list={array} />}
    </div>
  );
};

export default Stats; // Export the component as default

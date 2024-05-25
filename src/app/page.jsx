"use-client"
//React imports
import React from "react";

//main page Carosel
import NextCarosel from "../components/NextCarosel"
import TrendingTop10 from "../Sections/TrendingTop10";
import Categories from "@/Sections/Categories";

const Home = () => {
  return(
    <div className=" px-12 rounded-lg">
      
      {/* using Slider to see all the Images */}
      <NextCarosel/>
      <TrendingTop10/>
      <Categories/>
    </div>
  )
}

export default Home
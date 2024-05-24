"use-client"
//React imports
import React from "react";

//main page Carosel
import NextCarosel from "../components/NextCarosel"
import TrendingTop10 from "../Sections/TrendingTop10";

const Home = () => {
  return(
    <div className="pt-5 px-12 h-32 rounded-lg">
      
      {/* using Slider to see all the Images */}
      <NextCarosel/>
      <TrendingTop10/>
    </div>
  )
}

export default Home
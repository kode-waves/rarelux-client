"use client"
import React from "react";

const TrendingTop10Layout = (props) => {
    const {index,trending} = props
return (
    <div key={index} className="px-2 rounded-xl hover:bg-white dark:hover:bg-gray-800 flex py-2 items-center justify-between">
                                    <div className="flex items-center">
                                        <img className="bg-black rounded-full w-24" src={trending.src} alt="image" />
                                        <div className="pl-2">
                                            <h1 className="font-semibold text-gray-800 dark:text-white">{trending.name}</h1>
                                            <h1 className="font-semibold text-gray-400 dark:text-gray-400">{trending.rank}</h1>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="pl-32">
                                            <h1 className="font-semibold text-gray-300 dark:text-gray-600">Floor Price</h1>
                                            <h1 className="font-semibold text-gray-400 dark:text-gray-400">{trending.floorPrice}</h1>
                                        </div>
                                        <div className="pl-32">
                                            <h1 className="font-semibold text-gray-300 dark:text-gray-600">Volume</h1>
                                            <h1 className="font-semibold text-gray-400 dark:text-gray-400">{trending.volume}</h1>
                                        </div>
                                        <div className="pl-32">
                                            <h1 className="font-semibold text-gray-300 dark:text-gray-600">Sales</h1>
                                            <h1 className="font-semibold text-gray-400 dark:text-gray-400">{trending.sales}</h1>
                                        </div>
                                    </div>
                                </div>
)
}

export default TrendingTop10Layout

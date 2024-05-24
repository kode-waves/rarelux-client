import React from "react";

const TrendingTop10Layout = ({ index, trending }) => {
    return (
        <div key={index} className="px-2 rounded-xl hover:bg-white dark:hover:bg-gray-800 flex py-2 items-center justify-between cursor-pointer w-[54rem]">
            <div className="flex items-center">
                <img className="bg-black rounded-full w-20" src={trending.src} alt="image" />
                <div className="px-3">
                    <h1 className="font-semibold text-gray-800 dark:text-white w-40">{trending.name}</h1>
                    <h1 className="font-semibold text-gray-400 dark:text-gray-400">{trending.rank}</h1>
                </div>
            </div>
            <div className="flex items-center w-full justify-around">
                <Metric label="Floor Price" value={trending.floorPrice} />
                <Metric label="Volume" value={trending.volume} />
                <Metric label="Sales" value={trending.sales} />
            </div>
        </div>
    );
};

const Metric = ({ label, value }) => (
    <div>
        <h1 className="font-semibold text-gray-300 dark:text-gray-600">{label}</h1>
        <h1 className="font-semibold text-gray-400 dark:text-gray-400">{value}</h1>
    </div>
);

export default TrendingTop10Layout;

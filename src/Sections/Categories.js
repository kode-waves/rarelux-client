"use client";
import React, { useState } from "react";
import HeadingButton from "@/components/HeadingButton";
import CategoryCarousel from "@/components/CategoryCarousel";
import { JwelleriesData } from "@/lib";
import { FaChevronRight } from "react-icons/fa";

const Categories = () => {

    const [activeTab, setActiveTab] = useState(0);
    const categories = ["All", "Jwelleries", "Arts", "Cars", "Accessories"];

    return (
        <>
            <div className="pt-12">

                {categories.map((category, index) => (
                    <HeadingButton
                        key={index}
                        name={category}
                        onClick={() => setActiveTab(index)}
                        condition={activeTab === index}
                    />
                ))}

            </div>
            <Category data = {JwelleriesData} heading="Trending in Jwelleries"/>
            <Category data = {JwelleriesData} heading="Trending in Arts"/>
            <Category data = {JwelleriesData} heading="Trending in Watches"/>
            <Category data = {JwelleriesData} heading="Trending in Cars"/>
            <Category data = {JwelleriesData} heading="Trending in Accessories"/>

           
        </>
    );
};

export const Category = ({data, heading}) =>{
    return (
        <div className="pt-12">
                <div className="flex justify-between">
                    <h1 className="text-2xl font-semibold"> {heading} </h1>
                    <div className="flex">
                        <a className="flex items-end hover:underline" href="#">View More </a>
                        <div className="flex items-center pt-2 pl-2">
                            <FaChevronRight />
                        </div>
                    </div>
                </div>
                <CategoryCarousel data={data} />
            </div>
    )
}

export default Categories;

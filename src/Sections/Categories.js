"use client";
import React, { useState } from "react";
import HeadingButton from "@/components/HeadingButton";
import CategoryCarousel from "@/components/CategoryCarousel";
import { JwelleriesData } from "@/lib";
import { FaChevronRight } from "react-icons/fa";
import CategoryHeadListCarosel from "@/components/CategoryHeadListCarosel";

const Categories = () => {

    const [activeTab, setActiveTab] = useState(0);
    const categories = ["All", "Jwelleries", "Arts", "Cars", "Lands"];
    

    const renderCategories = (index) => {
        switch (index) {
            case 1: return (
                <>
                    <CategoryHeadListCarosel data={JwelleriesData} />
                    <Category data={JwelleriesData} heading="Trending in Necklaces" />
                    <Category data={JwelleriesData} heading="Trending in Rings" />
                    <Category data={JwelleriesData} heading="Trending in Diamonds" />
                    <Category data={JwelleriesData} heading="Trending in Earrings" />
                </>
            );
            case 2: return (
                <>
                    <CategoryHeadListCarosel data={JwelleriesData} />
                    <Category data={JwelleriesData} heading="Trending in Oil Painting" />
                    <Category data={JwelleriesData} heading="Trending in Acrylic Painting" />
                    <Category data={JwelleriesData} heading="Trending in Watercolor Painting" />
                    <Category data={JwelleriesData} heading="Trending in Gouache Painting" />
                </>
            );
            case 3: return (
                <>
                    <CategoryHeadListCarosel data={JwelleriesData} />
                    <Category data={JwelleriesData} heading="Trending in BMW" />
                    <Category data={JwelleriesData} heading="Trending in Rolls-Royce" />
                    <Category data={JwelleriesData} heading="Trending in Audi" />
                    <Category data={JwelleriesData} heading="Trending in Mercedes-Benz" />
                </>
            );
            case 4: return (
                <>
                    <CategoryHeadListCarosel data={JwelleriesData} />
                    <Category data={JwelleriesData} heading="Trending in Agricultural Land" />
                    <Category data={JwelleriesData} heading="Trending in Residential Land" />
                    <Category data={JwelleriesData} heading="Trending in Commercial Land" />
                    <Category data={JwelleriesData} heading="Trending in Industrial Land" />
                </>
            );
            default: return (
                <>
                    <Category data={JwelleriesData} heading="Trending in Jewelleries" />
                    <Category data={JwelleriesData} heading="Trending in Arts" />
                    <Category data={JwelleriesData} heading="Trending in Watches" />
                    <Category data={JwelleriesData} heading="Trending in Cars" />
                    <Category data={JwelleriesData} heading="Trending in Accessories" />
                </>
            );
        }
    };

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
            {renderCategories(activeTab)}
        </>
    );
};

const Category = ({ data, heading }) => (
    <div className="pt-12">
        <div className="flex justify-between">
            <h1 className="text-2xl font-semibold">{heading}</h1>
            <div className="flex">
                <a className="flex items-end hover:underline" href="#">View More</a>
                <div className="flex items-center pt-2 pl-2">
                    <FaChevronRight />
                </div>
            </div>
        </div>
        <CategoryCarousel data={data} />
    </div>
);

export default Categories;

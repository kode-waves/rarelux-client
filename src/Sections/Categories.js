"use client";
import React, { useState } from "react";
import HeadingButton from "@/components/HeadingButton";

const Categories = () => {
    const [activeTab, setActiveTab] = useState(0);
    const categories = ["All", "Jwelleries", "Arts", "Cars", "Accessories"];

    return (
        <div className="py-12">
            {categories.map((category, index) => (
                <HeadingButton 
                    key={index} 
                    name={category} 
                    onClick={() => setActiveTab(index)} 
                    condition={activeTab === index} 
                />
            ))}
        </div>
    );
};

export default Categories;

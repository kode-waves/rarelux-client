"use client"
import React from "react"
const   HeadingButton = (props) => {
    const { onClick, name, condition } = props
    return (
        <button className={`px-2 text-xl ${condition ? `border-b-2 border-gray-800 font-semibold` : ""}`} onClick={onClick}>{name}</button>
    )
}
export default HeadingButton
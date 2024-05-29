"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { FaChevronDown } from "react-icons/fa";

const Dropdown = (props) => {
    const {list, position, setPosition, fixedName} = props;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button >{list[position]}<FaChevronDown className="ml-1" /></Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="">
        {/* <DropdownMenuLabel>Panel Position</DropdownMenuLabel> */}
        <DropdownMenuRadioGroup value={position} key={position} onValueChange={setPosition}>
          {list.map((name, index) => {
         return <>
         <DropdownMenuRadioItem key={index} value={index} >{fixedName ? name + " " + fixedName : name}</DropdownMenuRadioItem>
         {/* <DropdownMenuSeparator />  */}
         </>
          })}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default Dropdown
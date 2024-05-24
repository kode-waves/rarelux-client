import Image from "next/image";
import MiddleNav from "./MiddleNav";
import NavbarButtons from "../Sections/NavbarButtons";
import logo from "../app/favicon.ico"
const Navbar = () => {
    return (
        
<header className="flex justify-between px-12 pt-4 sticky top-0 z-50 transition-all duration-300 ease-in-out">
            <div>
              <Image src={logo} className="shrink-0 h-12 w-12" alt="logo"/>
            </div>
            <div className="w-5/6  flex justify-center items-center rounded-full">
              <MiddleNav />
            </div>
              <NavbarButtons/>
          </header>
    )
}

export default Navbar;
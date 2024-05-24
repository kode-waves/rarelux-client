import Image from "next/image";
import MiddleNav from "./MiddleNav";
import NavbarButtons from "../Sections/NavbarButtons";
import logo from "../app/favicon.ico";

const Navbar = () => {
  return (
    <header className="px-12 pt-4 sticky top-0 z-50 transition-all duration-300 ease-in-out">
      <div className="flex justify-center">
        <div className="flex justify-between max-w-custom w-full items-center">
          <Image src={logo} className="shrink-0 h-12 w-12" alt="logo" />
          <div className="flex-grow flex justify-center items-center">
            <MiddleNav />
          </div>
          <NavbarButtons />
        </div>
      </div>
    </header>
  );
};

export default Navbar;

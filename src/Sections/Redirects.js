import LoginPopup from '@/components/LoginPopup';
import { AccountContext } from '@/context/context';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useContext, useState } from 'react'

const Redirects = () => {
  const pathname = usePathname(); // Get the current pathname
  const { account, connectWallet } = useContext(AccountContext);
  const [address, setAddress] = useState(null);


  // Handler for connect wallet button
  const handleClick = () => {
    connectWallet();
  };

  return (
    <div className="flex justify-between font-semibold pl-24">
    <Redirect link="/explore" name="Explore" pathname={pathname} />
    <Redirect link="/Stats" name="Stats" pathname={pathname} />
    {account || address ? (
      <Redirect link="/create" name="Create" pathname={pathname} />
    ) : (
      <LoginPopup 
        button={
          <button className="w-20 flex justify-center cursor-pointer text-gray-700 dark:text-gray-500 hover:text-customBlue dark:hover:text-gray-200">
            Create
          </button>
        } 
        handleClick={handleClick} 
      />
    )}
  </div>
  )
}

const Redirect = (props) => {
  const { link, name, pathname } = props;
  console.log("pathname == link ------------",pathname,link,pathname == link )
  return(
    <div className="w-20 flex justify-center">
    <Link href={link} className={`cursor-pointer  ${pathname == link ? "text-customBlue dark:text-gray-200" : "text-gray-700  dark:text-gray-500 hover:text-customBlue dark:hover:text-gray-200"}`}>
      {name}
    </Link>
  </div>

  )
};



export default Redirects
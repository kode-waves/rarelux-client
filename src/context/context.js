import { createContext, useContext } from 'react';
import useWallet from '@/hooks/useWallet';

export const AccountContext = createContext(null);

export const AccountProvider = ({ children }) => {
  const { account, walletBalance, connectWallet, isMetaMaskLocked, setAccount } = useWallet();

  return (
    <AccountContext.Provider value={{ account, walletBalance, connectWallet, setAccount, isMetaMaskLocked }}>
      {children}
    </AccountContext.Provider>
  );
};

export const useAccount = () => {
  return useContext(AccountContext);
};


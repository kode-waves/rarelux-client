"use client";

import { createContext, useContext, useState } from 'react';
import WalletConnectProvider from '@walletconnect/web3-provider';
import Web3Modal from 'web3modal';
import { ethers } from 'ethers';
import { Web3Provider } from '@ethersproject/providers';

export const AccountContext = createContext();

export function AccountProvider({ children }) {
  const [account, setAccount] = useState(null);

  const connectWallet = async () => {
    try {
      const providerOptions = {
        walletconnect: {
          package: WalletConnectProvider,
          options: {
            infuraId: process.env.ID, // required
          },
        },
      };
console.log("---------", process.env.ID)
      const web3Modal = new Web3Modal({
        cacheProvider: true,
        providerOptions,
      });

      const instance = await web3Modal.connect();
      console.log("🚀 ~ connectWal ~ instance:", instance)
      const provider = new Web3Provider(instance);
      const signer = provider.getSigner();
      const account = await signer.getAddress();
      console.log("🚀 ~ connectWal ~ account:", account)

      setAccount(account);
      console.log("Wallet connected:", account); // Debugging line
    } catch (error) {
      console.log("🚀 ~ connectWal ~ error:", error)
      console.error("Wallet connection failed:", error);
    }
  };

  return (
    <AccountContext.Provider value={{ account, connectWallet }}>
      {children}
    </AccountContext.Provider>
  );
}

export function useAccount() {
  return useContext(AccountContext);
}

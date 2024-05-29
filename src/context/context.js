"use client"; // This ensures the code runs in the client-side environment

import { createContext, useContext, useState, useEffect } from 'react'; // Import necessary hooks from React
import WalletConnectProvider from '@walletconnect/web3-provider'; // Import WalletConnect provider
import Web3Modal from 'web3modal'; // Import Web3Modal for wallet connections
import { ethers } from 'ethers'; // Import ethers.js for blockchain interactions
import { Web3Provider } from '@ethersproject/providers'; // Import Web3Provider from ethersproject
import storage from '@/lib/localstorage';

// Create a context for managing account-related state and functions
export const AccountContext = createContext(null);

// Provider component to wrap around parts of the app that need access to account context
export const AccountProvider = ({ children }) => {
  const [account, setAccount] = useState(null); // State to store the connected account address
  const [walletBalance, setWalletBalance] = useState(null); // State to store the wallet balance

  // Function to handle wallet connection
  const connectWallet = async () => {
    try {
      // Configuration for different wallet providers, including WalletConnect
      const providerOptions = {
        walletconnect: {
          package: WalletConnectProvider, // WalletConnect provider package
          options: {
            infuraId: '69def22082e74f4c85a8cd358ffa68e9', // Infura project ID for connecting to Ethereum network
          },
        },
      };

      // Initialize Web3Modal with the provider options
      const web3Modal = new Web3Modal({
        cacheProvider: true, // Enable caching of the chosen provider
        providerOptions, // Pass the provider options
      });

      // Open the modal to let user select a wallet, and get the provider instance
      const instance = await web3Modal.connect();
      const provider = new Web3Provider(instance); // Wrap the provider instance with Web3Provider
      const signer = provider.getSigner(); // Get a signer to sign transactions
      const address = await signer.getAddress(); // Get the connected account address
      if (!address) {
        console.error("No account provided");
        return;
      }
      if (typeof window.ethereum === 'undefined') {
        console.error("MetaMask not installed or not enabled");
        return;
      }
      const walletProvider = new ethers.providers.Web3Provider(window.ethereum);
      const balance = await walletProvider.getBalance(address);
      const balanceInEth = ethers.utils.formatEther(balance);
      setAccount(address); // Save the account address in state
      setWalletBalance(balanceInEth); // Save the wallet balance in state
      storage.Create('account', address); // Use localStorage directly for simplicity
      storage.Create('wallet', balanceInEth); // Use localStorage directly for simplicity
    } catch (error) {
      console.error("Wallet connection failed:", error); // Log any errors during connection
    }
  };

  // Effect hook to automatically connect to the cached provider when the component mounts
  useEffect(() => {
    if (Web3Modal.cachedProvider) {
      connectWallet();
    }
  }, []);

  // Provide account state and functions to the rest of the app
  return (
    <AccountContext.Provider value={{ account, walletBalance, connectWallet, setAccount }}>
      {children} {/* Render any child components */}
    </AccountContext.Provider>
  );
};

// Custom hook to use the AccountContext in functional components
export const useAccount = () => {
  return useContext(AccountContext); // Access the context value
};

import React,{ useState, useEffect } from 'react';
import { ethers } from 'ethers';
import Web3Modal from 'web3modal';
import { useDispatch } from 'react-redux';
import { createUser } from '@/Apis/user';
import storage from '@/lib/localstorage';

const useWallet = () => {
  const [account, setAccount] = useState(null);
  const [walletBalance, setWalletBalance] = useState(null);
  const [isMetaMaskLocked, setIsMetaMaskLocked] = useState(false);
  const dispatch = useDispatch();

  const connectWallet = async () => {
    try {
      if (typeof window.ethereum === 'undefined' || !window.ethereum.isMetaMask) {
        window.alert("MetaMask is not installed. Please install MetaMask extension to use this feature.");
        window.open('https://metamask.io/download.html', '_blank');
        return;
      }

      const providerOptions = {
        metamask: {
          id: 'injected',
          name: 'MetaMask',
          type: 'injected',
          check: 'isMetaMask',
        },
      };

      const web3Modal = new Web3Modal({
        cacheProvider: true,
        providerOptions,
      });

      const instance = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(instance);
      const signer = provider.getSigner();
      const address = await signer.getAddress();
      if (!address) {
        console.error("No account provided");
        return;
      }

      const walletProvider = new ethers.providers.Web3Provider(window.ethereum);
      const balance = await walletProvider.getBalance(address);
      const balanceInEth = ethers.utils.formatEther(balance);
      dispatch(await createUser(address, setAccount, setWalletBalance, balanceInEth));
      // setAccount(address);
      // setWalletBalance(balanceInEth);
      // storage.Create('account', address);
      // storage.Create('wallet', balanceInEth);
    } catch (error) {
      console.error("Wallet connection failed:", error);
    }
  };

  const checkMetaMaskLockStatus = async () => {
    try {
      const accounts = await window.ethereum.request({ method: 'eth_accounts' });
      if (accounts.length === 0) {
        storage.Delete('account');
        storage.Delete('wallet');
        setIsMetaMaskLocked(true);
      } else {
        setIsMetaMaskLocked(false);
      }
    } catch (error) {
      console.error("Failed to check MetaMask lock status:", error);
    }
  };

  useEffect(() => {
    if (Web3Modal.cachedProvider) {
      connectWallet();
    }
    checkMetaMaskLockStatus();
  }, []);

  return { account, walletBalance, connectWallet, isMetaMaskLocked, account, setAccount };
};

export default useWallet;

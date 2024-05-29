"use client";

import { AccountProvider } from '../context/context';

export default function ClientWrapper({ children }) {
  return (
    <AccountProvider>
      {children}
    </AccountProvider>
  );
}

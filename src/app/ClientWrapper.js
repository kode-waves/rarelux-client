"use client";
import { AccountProvider } from '../context/context';
import { Provider } from 'react-redux';
import store from './store';
export default function ClientWrapper({ children }) {
  return (
    <Provider store={store}>
    <AccountProvider>
      {children}
    </AccountProvider>
 </Provider>
  );
}

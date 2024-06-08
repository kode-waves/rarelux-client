import { apiClient } from "@/apiClient";
import { endpoints } from ".";
import storage from '@/lib/localstorage';

const REQUEST_ADD_USER = "REQUEST_ADD_USER";

export const requestAddUser = () => {
    return {
        type: REQUEST_ADD_USER
    }
}

export const createUser = async (address, setAccount, setWalletBalance, balanceInEth) => {
    return async (dispatch) => {
        dispatch(requestAddUser());
        try {
            const response = await apiClient.post(`${endpoints().userAPI}`, {address:address});
            if(response.data.status == 1){
              console.log("🚀 ~ return ~ response:", response)
              setAccount(address);
              setWalletBalance(balanceInEth);
              storage.Create('account', address);
              storage.Create('wallet', balanceInEth);
            }
            return response.data;
        } catch (err) {
            console.log("Error while creating user:", err);
            // throw err;
        }
    }
}

import axios from "axios";
// import { toast } from "react-toastify";
// import { BaseURL } from "../Action/BaseURL";
// import { getTokenPost } from "../services/Token";

export const ADD_USER = "ADD_USER";
export const EDIT_USER = "EDIT_USER";


export function create(body) {
  return async (dispatch, getState) => {
    // const user = (await JSON.parse(localStorage.getItem("user"))) || [];

    let token = user.token;

    const config = {
      method: "get",
      url: `${BaseURL}/GetAllUser?searchTerm=${searchTerm}&status=${statusFilter}`,
      headers: {
        deviceType: 3,
        appVersion: 1,
        apiVersion: 1,
        deviceId: "deviceId",
        languageCode: "en",
        loginRegion: "IN",
        token: token,
      },
    };
    const responsive = await axios(config);
    // const responsive = await axios.get(`${BaseURL}/GetAllUsers`);
    const MerchantList = responsive.data.hathme;
    const payload = MerchantList.data;
    if (MerchantList.success === 1) {
      dispatch({ type: ALL_USER, payload, isFetching: false });
    }else{
      dispatch({ type: ALL_USER,payload:[], isFetching: false });
    }
  };
}


export function getSingleUser(userId) {
  return async (dispatch) => {
    const postData = {
      "hathme": {
        "userId":userId
      }
    } 
    const config = getTokenPost('post','getUserDetails',postData);
    const responsive = await axios(config);
    const User  = responsive.data.hathme;
    const payload = User.data;
    if (User.success === 1) {
      dispatch({ type: SINGLE_USER, payload, isFetching: false });
    }
  };
}

export function approvedUserBankDetail(userId, status) {
  return async (dispatch) => {
    const postData = {
      "hathme": {
        "userId": userId, 
        "status": status
      }
    }
    const config = getTokenPost('post', 'approveRejectUserBankDetail', postData);
    const response = await axios(config);
    const payload = response.data.hathme;
    if (payload.success === 1) {
      dispatch({
        message: payload.resMsg,
        type: DELETE_USER, 
        isSuccess: false,
      });
      toast.success(payload.resMsg);
    }
  };
}
export function approveRejectUserKyc(userId, status) {
  return async (dispatch) => {
    const postData = {
      "hathme": {
        "userId": userId, 
        "status": status
      }
    }
    const config = getTokenPost('post', 'approveRejectUserKyc', postData);
    const response = await axios(config);
    const payload = response.data.hathme;
    if (payload.success === 1) {
      dispatch({
        message: payload.resMsg,
        type: KYC_USER, 
        isSuccess: false,
      });
      toast.success(payload.resMsg);
      dispatch(getAllUsers(userId));
    }
  };
}


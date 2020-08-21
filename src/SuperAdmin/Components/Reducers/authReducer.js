import {
  ADMIN_SIGNUP_SUCCESS,
  ADMIN_SIGNUP_ERROR,
  ADMIN_LOGIN_SUCCESS,
  ADMIN_LOGIN_ERROR
} from "../../Actions/types";

const state = {
  signup: [],
  admin: {
    userName: "",
    password: ""
  },
  resMsg: "",
  loginResMsg: ""
};
function authReducer(mState = { ...state }, action) {
  switch (action.type) {
    case ADMIN_SIGNUP_SUCCESS:
      console.log(action.payload, "Reducer Sigup Data");
      if (action.payload === null || action.payload === undefined) {
      } else {
        mState.resMsg = "";
        mState.signup.push(action.payload);
      }
      return deepCopy(mState);
    case ADMIN_SIGNUP_ERROR:
      if (action.payload === null || action.payload === undefined) {
      } else {
        console.log(action.payload);
        mState.signup = [];
        mState.resMsg = action.payload;
      }
      return deepCopy(mState);
    case ADMIN_LOGIN_SUCCESS:
      if (action.payload === null || action.payload === undefined) {
      } else {
        mState.loginResMsg = "";
        mState.admin = action.payload;
      }
      return deepCopy(mState);
    case ADMIN_LOGIN_ERROR:
      if (action.payload === null || action.payload === undefined) {
      } else {
        console.log(action.payload);
        mState.loginResMsg = action.payload;
      }
      return deepCopy(mState);
    default:
      return deepCopy(mState);
  }
}

const deepCopy = obj => {
  const newObj = JSON.parse(JSON.stringify(obj));
  return newObj;
};
export default authReducer;

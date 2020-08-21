import {
  EMPLOYEE_LOGIN_ERROR,
  EMPLOYEE_LOGIN_SUCCESS
} from "../../ActionsEmployee/emplyoeeActionTypes";

const state = {
  employee: {
    userName: "",
    password: ""
  },
  resMsg: "",
  loginResMsg: ""
};
function employeeAuthReducer(mState = { ...state }, action) {
  switch (action.type) {
    case EMPLOYEE_LOGIN_SUCCESS:
      if (action.payload === null || action.payload === undefined) {
      } else {
        mState.employee = action.payload;
      }
      return deepCopy(mState);
    case EMPLOYEE_LOGIN_ERROR:
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
export default employeeAuthReducer;

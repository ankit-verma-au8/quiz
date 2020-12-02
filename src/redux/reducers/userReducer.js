import { SET_USER, SET_PASSCODE } from "../actionTypes";
const initialState = {
  user: null,
  passcode: null,
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_USER:
      return { ...state, user: payload };
    case SET_PASSCODE:
      sessionStorage.setItem("passcode", payload);
      return { ...state, passcode: payload };
    default:
      return state;
  }
};

export default userReducer;

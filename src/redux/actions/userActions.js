import { SET_USER, SET_PASSCODE } from "../actionTypes";

export const setUser = (userData) => {
  return (dispatch) => {
    dispatch({
      type: SET_USER,
      payload: userData,
    });
  };
};

export const setPasscode = (passcode) => {
  return (dispatch) => {
    dispatch({
      type: SET_PASSCODE,
      payload: passcode,
    });
  };
};

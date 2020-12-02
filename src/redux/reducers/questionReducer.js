import { SET_QUESTION } from "../actionTypes";

const initialState = {
  question: null,
};

const questionReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_QUESTION:
      return { ...state, question: payload };
    default:
      return state;
  }
};

export default questionReducer;

import { SET_QUESTION } from "../actionTypes";
import questionData from "../../Questions";

export const setQuestion = (number) => {
  return (dispatch) => {
    const { questionArray } = questionData;
    dispatch({
      type: SET_QUESTION,
      payload: questionArray[number],
    });
  };
};

export const removeQuestion = () => {
  return (dispatch) => {
    dispatch({
      type: SET_QUESTION,
      payload: null,
    });
  };
};

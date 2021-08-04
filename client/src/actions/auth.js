import * as Api from "../Api";
import { AUTH } from "../constants/actionTypes";

export const signup = (formData, history) => async (dispatch) => {
  try {
    const { data } = await Api.signUp(formData);
    dispatch({
      type: AUTH,
      data,
    });
    history.push("/");
  } catch (error) {
    console.log(error);
  }
};
export const signIn = (formData, history) => async (dispatch) => {
  try {
    const { data } = await Api.signIn(formData);
    dispatch({
      type: AUTH,
      data,
    });
    history.push("/");
  } catch (error) {
    console.log(error);
  }
};

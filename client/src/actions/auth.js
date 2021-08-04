// import * as Api from "../Api";
import { AUTH } from "../constants/actionTypes";

export const signup = (formData, history) => async (dispatch) => {
  try {
    // const response = await Api.signup(formData);
    // dispatch({
    //   type: AUTH,
    //   payload: response,
    // });
    history.push("/");
  } catch (error) {
    dispatch({
      type: AUTH,
      payload: error,
    });
  }
};
export const login = (formData, history) => async (dispatch) => {};

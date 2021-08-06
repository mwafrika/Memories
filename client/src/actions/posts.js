import * as Api from "../Api";
import {
  CREATE,
  UPDATE,
  DELETE,
  FETCH_ALL,
  LIKE,
  FETCH_BY_SEARCH,
} from "../constants/actionTypes";

export const getPosts = (page) => async (dispatch) => {
  try {
    const { data } = await Api.fetchPosts(page);
    dispatch({
      type: FETCH_ALL,
      payload: data,
    });
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
export const getPostBySearch = (searchQuery) => async (dispatch) => {
  try {
    const {
      data: { data },
    } = await Api.fetchPostsBySearch(searchQuery);

    dispatch({
      type: FETCH_BY_SEARCH,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};
export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await Api.createPost(post);
    dispatch({
      type: CREATE,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await Api.updatePost(id, post);
    dispatch({
      type: UPDATE,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await Api.deletePost(id);
    dispatch({
      type: DELETE,
      payload: id,
    });
  } catch (error) {
    console.log(error);
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await Api.likePost(id);
    dispatch({
      type: LIKE,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

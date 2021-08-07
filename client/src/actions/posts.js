import * as Api from "../Api";
import {
  CREATE,
  UPDATE,
  DELETE,
  FETCH_ALL,
  LIKE,
  FETCH_BY_SEARCH,
  START_LOADING,
  END_LOADING,
  FETCH_POST,
} from "../constants/actionTypes";

export const getPost = (id) => async (dispatch) => {
  try {
    dispatch({
      type: START_LOADING,
    });
    const { data } = await Api.fetchPosts(id);

    console.log(data);

    dispatch({
      type: FETCH_POST,
      payload: data,
    });

    dispatch({
      type: END_LOADING,
    });
  } catch (error) {
    console.log(error);
  }
};
export const getPosts = (page) => async (dispatch) => {
  try {
    dispatch({
      type: START_LOADING,
    });
    const { data } = await Api.fetchPosts(page);

    console.log(data);

    dispatch({
      type: FETCH_ALL,
      payload: data,
    });

    dispatch({
      type: END_LOADING,
    });
  } catch (error) {
    console.log(error);
  }
};
export const getPostBySearch = (searchQuery) => async (dispatch) => {
  try {
    dispatch({
      type: START_LOADING,
    });
    const {
      data: { data },
    } = await Api.fetchPostsBySearch(searchQuery);

    dispatch({
      type: FETCH_BY_SEARCH,
      payload: data,
    });
    dispatch({
      type: END_LOADING,
    });
  } catch (error) {
    console.log(error);
  }
};
export const createPost = (post, history) => async (dispatch) => {
  try {
    dispatch({
      type: START_LOADING,
    });

    const { data } = await Api.createPost(post);
    history.push(`/posts/${data._id}`);
    dispatch({
      type: CREATE,
      payload: data,
    });
    dispatch({
      type: END_LOADING,
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

import { Dispatch } from "redux";
import {
  fetchUserPhtots,
  fetchUsersData,
} from "../../utils/api";
import {
  USER_DATA_FAILURE,
  USER_DATA_LOADING,
  USER_DATA_REMOVE,
  USER_DATA_SUCCESS,
  USER_PHOTOS_FAILURE,
  USER_PHOTOS_LOADING,
  USER_PHOTOS_REMOVE,
  USER_PHOTOS_SUCCESS,
} from "./actionTypes";

export function getUserData(username: string) {
  return async function (dispatch: Dispatch) {
    try {
      dispatch({ type: USER_DATA_LOADING });

      const { data } = await fetchUsersData(username);

      dispatch({
        type: USER_DATA_SUCCESS,
        payload: { data },
      });
    } catch (error) {
      dispatch({ type: USER_DATA_FAILURE });
      console.error(error);
    }
  };
}

export function removeUserData() {
  return function (dispatch: Dispatch) {
    dispatch({
      type: USER_DATA_REMOVE,
    });
  };
}

export function getUserPhotos(username: string, page = 1) {
  return async function (dispatch: Dispatch) {
    try {
      dispatch({ type: USER_PHOTOS_LOADING });

      const { data } = await fetchUserPhtots(username, page);

      dispatch({
        type: USER_PHOTOS_SUCCESS,
        payload: { data },
      });
    } catch (error) {
      dispatch({ type: USER_PHOTOS_FAILURE });
      console.error(error);
    }
  };
}

export function removeUserPhotos() {
  return function (dispatch: Dispatch) {
    dispatch({
      type: USER_PHOTOS_REMOVE,
    });
  };
}

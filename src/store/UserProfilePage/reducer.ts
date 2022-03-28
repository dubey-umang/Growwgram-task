import { combineReducers } from "redux";
import { FeedData, User } from "../../utils/types";
import {
  USER_DATA_FAILURE,
  USER_DATA_LOADING,
  USER_DATA_SUCCESS,
  ReducerAction,
  USER_PHOTOS_LOADING,
  USER_PHOTOS_FAILURE,
  USER_PHOTOS_SUCCESS,
  USER_DATA_REMOVE,
  USER_PHOTOS_REMOVE,
} from "./actionTypes";

const initialState = {
  userData: {
    isLoading: true,
    data: {} as User,
    hasError: false,
    removeData: false,
  },
  userPhotos: {
    isLoading: true,
    data: [] as FeedData[],
    hasError: false,
    hasMore: false,
    removeData: false,
  },
};

function userDataReducer(state = initialState.userData, action: ReducerAction) {
  switch (action.type) {
    case USER_DATA_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case USER_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        isLoading: false,
        hasError: false,
        removeData: false
      };

    case USER_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        hasError: true,
        hasMore: false,
      };

    case USER_DATA_REMOVE:
      return {
        ...state,
        isLoading: true,
        data: {},
        hasError: false,
        removeData: true,
      };

    default:
      return state;
  }
}

function userPhotosReducer(
  state = initialState.userPhotos,
  action: ReducerAction
) {
  switch (action.type) {
    case USER_PHOTOS_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case USER_PHOTOS_SUCCESS:
      return {
        ...state,
        data: [...state.data, ...action.payload.data],
        isLoading: false,
        hasError: false,
        hasMore: action.payload.data.length >= 10,
        removeData: false
      };

    case USER_PHOTOS_FAILURE:
      return {
        ...state,
        isLoading: false,
        hasError: true,
        hasMore: false,
      };

    case USER_PHOTOS_REMOVE:
      return {
        ...state,
        isLoading: true,
        data: [],
        hasError: false,
        removeData: true,
      };

    default:
      return state;
  }
}

export default combineReducers({
  userData: userDataReducer,
  userPhotos: userPhotosReducer,
});

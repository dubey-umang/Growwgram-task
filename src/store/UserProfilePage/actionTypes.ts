import { FeedData, User } from "../../utils/types";

export const USER_DATA_LOADING = "USER_DATA_LOADING";
export const USER_DATA_SUCCESS = "USER_DATA_SUCCESS";
export const USER_DATA_FAILURE = "USER_DATA_FAILURE";
export const USER_DATA_REMOVE = "USER_DATA_REMOVE";

export const USER_PHOTOS_LOADING = "USER_PHOTOS_LOADING";
export const USER_PHOTOS_SUCCESS = "USER_PHOTOS_SUCCESS";
export const USER_PHOTOS_FAILURE = "USER_PHOTOS_FAILURE";
export const USER_PHOTOS_REMOVE = "USER_PHOTOS_REMOVE";

type UserDataLoadingAction = {
  type: typeof USER_DATA_LOADING;
};

type UserDataFailureAction = {
  type: typeof USER_DATA_FAILURE;
};

type UserDataSuccessAction = {
  type: typeof USER_DATA_SUCCESS;
  payload: {
    data: User;
  };
};

type UserDataRemoveAction = {
  type: typeof USER_DATA_REMOVE;
};

type UserPhotosLoadingAction = {
  type: typeof USER_PHOTOS_LOADING;
};

type UserPhotosFailureAction = {
  type: typeof USER_PHOTOS_FAILURE;
};

type UserPhotosSuccessAction = {
  type: typeof USER_PHOTOS_SUCCESS;
  payload: {
    data: FeedData[];
  };
};
type UserPhotosRemoveAction = {
  type: typeof USER_PHOTOS_REMOVE;
};

export type ReducerAction =
  | UserDataLoadingAction
  | UserDataFailureAction
  | UserDataSuccessAction
  | UserDataRemoveAction
  | UserPhotosLoadingAction
  | UserPhotosSuccessAction
  | UserPhotosFailureAction
  | UserPhotosRemoveAction;

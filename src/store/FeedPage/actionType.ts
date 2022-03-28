import { FeedData } from "../../utils/types";

export const FEED_LOADING = 'FEED_LOADING';
export const FEED_SUCCESS = 'FEED_SUCCESS';
export const FEED_FAILURE = 'FEED_FAILURE';
export const FEED_REMOVE = 'FEED_REMOVE';

type LoadingAction = {
  type: typeof FEED_LOADING
}

type FailureAction = {
  type: typeof FEED_FAILURE
}

type SuccessAction = {
  type: typeof FEED_SUCCESS;
  payload: {
    data: FeedData[]
  }
}

type RemoveAction = {
  type: typeof FEED_REMOVE;
}

export type ReducerAction = LoadingAction | FailureAction | SuccessAction | RemoveAction;
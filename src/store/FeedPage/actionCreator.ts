import { Dispatch } from "redux";
import { getRandomFeeds } from "../../utils/api";
import { FEED_FAILURE, FEED_LOADING, FEED_REMOVE, FEED_SUCCESS } from "./actionType";

export function getFeedsData(pageNo = 1) {
  return async function(dispatch: Dispatch) {
    try {
      dispatch({ type: FEED_LOADING })

      const { data } = await getRandomFeeds(pageNo);
            
      dispatch({ 
        type: FEED_SUCCESS,
        payload: { data }
      })
    } catch(error) {
      dispatch({ type: FEED_FAILURE })
      console.error(error);
    }
  }
}

export function removeFeedsData() {
  return function (dispatch: Dispatch) {
    dispatch({
      type: FEED_REMOVE,
    });
  };
}
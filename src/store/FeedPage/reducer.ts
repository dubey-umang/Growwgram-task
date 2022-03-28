import { FEED_FAILURE, FEED_LOADING, FEED_REMOVE, FEED_SUCCESS, ReducerAction } from "./actionType";
import { FeedData } from "../../utils/types";

export const initialState = {
  isLoading: true,
  data: [] as FeedData[],
  hasError: false,
  hasMore: true,
  pageNo: 1,
  removeData: false
}

export default function reducer(state = initialState, action: ReducerAction) {
  switch(action.type) {
    case FEED_LOADING:
      return {
        ...state,
        isLoading: true,
      }
    
    case FEED_SUCCESS:
      return {
        ...state, 
        data: [...state.data, ...action.payload.data],
        isLoading: false,
        hasError: false,
        hasMore: action.payload.data.length >= 10,
        pageNo: state.pageNo + 1,
        removeData: false
      }
    
    case FEED_FAILURE:
      return {
        ...state,
        isLoading: false,
        hasError: true,
        hasMore: false
      }
    
      case FEED_REMOVE:
        return {
          ...state,
          isLoading: true,
          data: [],
          hasError: false,
          hasMore: true,
          removeData: true
        }
    
    default: 
      return state;
  }
}
import { combineReducers } from 'redux';
import feedPageReducer from './FeedPage/reducer';
import profilePageReducer from './UserProfilePage/reducer';

export default combineReducers({
  feedPage: feedPageReducer,
  profilePage: profilePageReducer
})
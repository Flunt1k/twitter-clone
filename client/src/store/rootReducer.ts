import {combineReducers} from 'redux';
import {tweetsReducer} from './ducks/tweets/reducer';
import {tagsReducer} from './ducks/tags/reducer';
import {tweetReducer} from './ducks/tweet/reducer';

const rootReducer = combineReducers({
  tweets: tweetsReducer,
  tweet: tweetReducer,
  tags: tagsReducer,
});

export default rootReducer;

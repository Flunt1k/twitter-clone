import { put, call, takeLatest } from 'redux-saga/effects';

import {
  FetchTweetActionInterface,
  setTweet,
  setTweetLoadingState,
  TweetActionsType,
} from './actionCreators';
import {LoadingState} from './contracts/state';
import {TweetApi} from '../../../services/api/tweetsApi';
import { Tweet } from '../tweets/contracts/state';

export function* fetchTweetRequest({payload: tweetId}: FetchTweetActionInterface) {
 try {
   const data: Tweet[] = yield call(TweetApi.fetchTweet, tweetId)
   yield put(setTweet(data[0]))
 } catch (e) {
   yield put(setTweetLoadingState(LoadingState.ERROR))
 }
}

export function* tweetSaga(){
  yield takeLatest(TweetActionsType.FETCH_TWEET, fetchTweetRequest)
}

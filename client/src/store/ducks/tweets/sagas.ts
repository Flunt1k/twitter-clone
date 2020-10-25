import {takeLatest, call, put} from 'redux-saga/effects';

import {
  setTweets,
  setTweetsLoadingState,
  TweetsAction,
} from './actionCreators';
import {TweetApi} from '../../../services/api/tweetsApi';
import {LoadingState} from './contracts/state';

export function* fetchTweetsRequest() {
  try {
    const data = yield call(TweetApi.fetchTweets);
    yield put(setTweets(data));
  } catch (e) {
    yield put(setTweetsLoadingState(LoadingState.ERROR));
  }

}

export function* tweetsSaga() {
  yield takeLatest(TweetsAction.FETCH_TWEETS, fetchTweetsRequest);
}

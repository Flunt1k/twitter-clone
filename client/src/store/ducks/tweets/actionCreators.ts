import {LoadingState, TweetsState} from './contracts/state';
import {Action} from 'redux';

export enum TweetsAction {
  SET_TWEETS = 'tweets/SET_TWEETS',
  FETCH_TWEETS = 'tweets/FETCH_TWEETS',
  SET_LOADING_STATE = 'tweets/SET_LOADING_STATE'
}

export interface SetTweetsActionInterface extends Action<TweetsAction> {
  type: TweetsAction.SET_TWEETS;
  payload: TweetsState['items'];
}

export interface FetchTweetsActionInterface extends Action<TweetsAction> {
  type: TweetsAction.FETCH_TWEETS;
}

export interface SetTweetsLoadingStateActionInterface extends Action<TweetsAction> {
  type: TweetsAction.SET_LOADING_STATE;
  payload: LoadingState
}

export const setTweets = (payload: TweetsState['items']): SetTweetsActionInterface => ({
  type: TweetsAction.SET_TWEETS,
  payload,
});

export const setTweetsLoadingState = (payload: LoadingState): SetTweetsLoadingStateActionInterface => ({
  type: TweetsAction.SET_LOADING_STATE,
  payload,
});

export const fetchTweets = (): FetchTweetsActionInterface => ({
  type: TweetsAction.FETCH_TWEETS,
})

export type TweetsActionTypes =
    SetTweetsActionInterface
    | SetTweetsLoadingStateActionInterface
    | FetchTweetsActionInterface

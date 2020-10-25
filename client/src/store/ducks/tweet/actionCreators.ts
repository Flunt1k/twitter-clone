import {Action} from 'redux';
import {Tweet} from '../tweets/contracts/state';
import {LoadingState} from './contracts/state';

export enum TweetActionsType {
  SET_TWEET = 'tweet/SET_TWEET',
  FETCH_TWEET = 'tweet/FETCH_TWEET',
  SET_LOADING_STATE = 'tweet/SET_LOADING_STATE'
}

export interface SetTweetActionInterface extends Action<TweetActionsType> {
  type: TweetActionsType.SET_TWEET,
  payload: Tweet
}

export interface FetchTweetActionInterface extends Action<TweetActionsType> {
  type: TweetActionsType.FETCH_TWEET
  payload: string
}

export interface SetTweetLoadingStateActionInterface extends Action<TweetActionsType> {
  type: TweetActionsType.SET_LOADING_STATE,
  payload: LoadingState
}

export const setTweet = (payload: Tweet): SetTweetActionInterface => ({
  type: TweetActionsType.SET_TWEET,
  payload,
});

export const fetchTweet = (payload: string): FetchTweetActionInterface => ({
  type: TweetActionsType.FETCH_TWEET,
  payload
});

export const setTweetLoadingState = (payload: LoadingState): SetTweetLoadingStateActionInterface => ({
  type: TweetActionsType.SET_LOADING_STATE,
  payload,
});

export type TweetActions =
    | SetTweetLoadingStateActionInterface
    | SetTweetActionInterface
    | FetchTweetActionInterface

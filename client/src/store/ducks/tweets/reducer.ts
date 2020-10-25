import produce, {Draft} from 'immer';
import {LoadingState, TweetsState} from './contracts/state';
import {TweetsAction, TweetsActionTypes} from './actionCreators';

const initialTweetsState: TweetsState = {
  items: [],
  loadingState: LoadingState.NEVER,
};

export const tweetsReducer = produce(
    (draft: Draft<TweetsState>, action: TweetsActionTypes) => {

      switch (action.type) {
        case TweetsAction.SET_TWEETS:
          draft.items = action.payload;
          draft.loadingState = LoadingState.LOADED;
          break;

        case TweetsAction.FETCH_TWEETS:
          draft.items = [];
          draft.loadingState = LoadingState.LOADING;
          break;
        case TweetsAction.SET_LOADING_STATE:
          draft.loadingState = action.payload;

          break;
      }

    }, initialTweetsState);

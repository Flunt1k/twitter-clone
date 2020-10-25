import {createStore, compose, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga'

import rootSaga from './saga';
import rootReducer from './rootReducer'
import {TweetsState} from './ducks/tweets/contracts/state';
import {TagsState} from './ducks/tags/contracts/state';

const sagaMiddleware = createSagaMiddleware()

export interface RootState {
  tweets: TweetsState;
  tags: TagsState;
}

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootSaga)

import {createStore, compose, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga'

import { rootReducer } from './rootReducer'
import rootSaga from './saga';
import {TweetsState} from './ducks/tweets/contracts/state';

const sagaMiddleware = createSagaMiddleware()

export interface RootState {
  tweets: TweetsState;
}

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootSaga)

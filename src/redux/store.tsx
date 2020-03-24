import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducer';
import rootSaga from './saga';

declare global {
  interface Window {
    // eslint-disable-next-line
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const sagaMiddleware = createSagaMiddleware();
const middlewares = [thunk, sagaMiddleware];

export const composeEnhancers =
  (process.env.REACT_APP_ENV !== 'prod' &&
    window &&
    // eslint-disable-next-line
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares)),
);


sagaMiddleware.run(rootSaga);

export { store };

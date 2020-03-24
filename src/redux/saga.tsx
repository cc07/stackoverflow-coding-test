import { all } from 'redux-saga/effects';

import tagSaga from './tag/saga';

export default function* rootSaga() {
  yield all([
    tagSaga(),
  ]);
}

import { all } from 'redux-saga/effects';

import tagSaga from './tag/saga';
import questionSaga from './question/saga';

export default function* rootSaga() {
  yield all([
    tagSaga(),
    questionSaga(),
  ]);
}

import { all, takeEvery, put, call, fork } from 'redux-saga/effects';
import actions from './actions';
import Api from './api';

export class TagSaga {
  public static * fetchTagRequest(): any {
    yield takeEvery(actions.TAG_FETCH_REQUEST, function* (): any {
      try {
        const result = yield call(Api.fetchTag);

        if (result.error) {
          throw new Error(result.error.response.data.message);
        }

        yield put({
          type: actions.TAG_FETCH_SUCCESS,
          ...result,
        });
      } catch (error) {
        yield put({
          error: 'Error, please try again.',
          type: actions.TAG_FETCH_ERROR,
        });
      }
    });
  }
}

export default function* () {
  yield all([
    fork(TagSaga.fetchTagRequest),
  ]);
}

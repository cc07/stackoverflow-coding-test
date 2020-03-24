import { all, takeEvery, put, call, fork } from 'redux-saga/effects';
import actions from './actions';
import Api from './api';

import {
  IAction,
} from '../interfaces';

export class TagSaga {
  public static * fetchTagRequest(): any {
    yield takeEvery(actions.TAG_FETCH_REQUEST, function* ({ payload }: IAction<{ search: string }>): any {
      try {
        const { search }: any = payload;
        const result = yield call(Api.fetchTag, search);

        yield put({
          type: actions.TAG_FETCH_SUCCESS,
          data: result.data,
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

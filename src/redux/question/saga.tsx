import { all, takeEvery, put, call, fork } from 'redux-saga/effects';
import actions from './actions';
import Api from './api';

import {
  IAction,
} from '../interfaces';

export class QuestionSaga {
  public static * fetchQuestionRequest(): any {
    yield takeEvery(actions.QUESTION_FETCH_REQUEST, function* ({ payload }: IAction<{ tag: string}>) {
      try {
        if (!payload || !payload.tag) {
          throw new Error('Tag is not provided');
        }
        const { tag } = payload;
        const result = yield call(Api.fetchQuestion, tag);

        yield put({
          type: actions.QUESTION_FETCH_SUCCESS,
          data: result.data,
        });
      } catch (error) {
        yield put({
          error: 'Error, please try again.',
          type: actions.QUESTION_FETCH_ERROR,
        });
      }
    });
  }
}

export default function* () {
  yield all([
    fork(QuestionSaga.fetchQuestionRequest),
  ]);
}

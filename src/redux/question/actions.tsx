import {
  IAction,
} from '../interfaces';

const NAMESPACE = '@@QuestionAction';

export default class QuestionAction {
  public static readonly QUESTION_FETCH_REQUEST: string = `${NAMESPACE}/QUESTION_FETCH_REQUEST`;
  public static readonly QUESTION_FETCH_SUCCESS: string = `${NAMESPACE}/QUESTION_FETCH_SUCCESS`;
  public static readonly QUESTION_FETCH_ERROR: string = `${NAMESPACE}/QUESTION_FETCH_ERROR`;

  public static fetchQuestion(tag: string): IAction<{ tag: string}> {
    return {
      type: QuestionAction.QUESTION_FETCH_REQUEST,
      payload: {
        tag,
      },
    };
  }
}

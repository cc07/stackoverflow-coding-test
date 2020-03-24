import {
  IAction,
} from '../interfaces';

const NAMESPACE = '@@QuestionAction';

export default class QuestionAction {
  public static readonly QUESTION_FETCH_REQUEST: string = `${NAMESPACE}/QUESTION_FETCH_REQUEST`;
  public static readonly QUESTION_FETCH_SUCCESS: string = `${NAMESPACE}/QUESTION_FETCH_SUCCESS`;
  public static readonly QUESTION_FETCH_ERROR: string = `${NAMESPACE}/QUESTION_FETCH_ERROR`;

  public static readonly QUESTION_FETCH_MORE_REQUEST: string = `${NAMESPACE}/QUESTION_FETCH_MORE_REQUEST`;
  public static readonly QUESTION_FETCH_MORE_SUCCESS: string = `${NAMESPACE}/QUESTION_FETCH_MORE_SUCCESS`;
  public static readonly QUESTION_FETCH_MORE_ERROR: string = `${NAMESPACE}/QUESTION_FETCH_MORE_ERROR`;

  public static fetchQuestion(tag: string): IAction<{ tag: string}> {
    return {
      type: QuestionAction.QUESTION_FETCH_REQUEST,
      payload: {
        tag,
      },
    };
  }

  public static fetchMore(tag: string, page: number): IAction<{ tag: string, page: number}> {
    console.log(26, tag, page);
    return {
      type: QuestionAction.QUESTION_FETCH_MORE_REQUEST,
      payload: {
        tag,
        page,
      },
    }
  }
}

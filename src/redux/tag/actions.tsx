import {
  IAction,
} from '../interfaces';

const NAMESPACE = '@@TagAction';

export default class TagAction {
  public static readonly TAG_FETCH_REQUEST: string = `${NAMESPACE}/TAG_FETCH_REQUEST`;
  public static readonly TAG_FETCH_SUCCESS: string = `${NAMESPACE}/TAG_FETCH_SUCCESS`;
  public static readonly TAG_FETCH_ERROR: string = `${NAMESPACE}/TAG_FETCH_ERROR`;

  public static fetchTag(): IAction<string> {
    return {
      type: TagAction.TAG_FETCH_REQUEST,
    };
  }
}

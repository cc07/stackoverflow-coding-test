export interface IAction<T> {
  type: string;
  payload?: T;
  error?: boolean;
  meta?: any;
  callback?: Function;
  dispatch?: Function;
}

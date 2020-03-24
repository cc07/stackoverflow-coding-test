import actions from './actions';

const initState = {
  data: [],
  page: 1,
  hasMore: false,
  isLoading: false,
  error: null,
};

export default function questionReducer(state = initState, action: any) {
  switch (action.type) {
    case actions.QUESTION_FETCH_REQUEST: {
      return {
        data: [],
        isLoading: true,
        error: '',
      };
    }
    case actions.QUESTION_FETCH_SUCCESS: {
      const { data, hasMore } = action;
      return {
        ...state,
        data,
        hasMore,
        page: 1,
        isLoading: false,
        error: '',
      };
    }
    case actions.QUESTION_FETCH_MORE_REQUEST: {
      return {
        ...state,
        isLoading: true,
        error: '',
      };
    }
    case actions.QUESTION_FETCH_MORE_SUCCESS: {
      const { data, page, hasMore } = action;

      return {
        ...state,
        data: [
          ...state.data,
          ...data,
        ],
        page,
        hasMore,
        isLoading: false,
        error: '',
      };
    }
    case actions.QUESTION_FETCH_ERROR:
    case actions.QUESTION_FETCH_MORE_ERROR: {
      const { error } = action;
      return {
        ...state,
        error,
        isLoading: false,
      };
    }
    default: {
      return state;
    }
  }
}

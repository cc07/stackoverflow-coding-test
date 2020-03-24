import actions from './actions';

const initState = {
  data: [],
  isLoading: false,
  error: null,
};

export default function authReducer(state = initState, action: any) {
  switch (action.type) {
    case actions.TAG_FETCH_REQUEST: {
      return {
        ...state,
        isLoading: true,
        error: '',
      };
    }
    case actions.TAG_FETCH_SUCCESS: {
      const { data } = action;
      return {
        ...state,
        data,
        isLoading: false,
        error: '',
      };
    }
    case actions.TAG_FETCH_ERROR: {
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

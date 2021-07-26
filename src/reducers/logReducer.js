import {
  ADD_LOG,
  CLEAR_CURRENT,
  DELETE_LOG,
  GET_LOGS,
  LOGS_ERROR,
  SEARCH_LOGS,
  SET_CURRENT,
  SET_LOADING,
  UPDATE_LOG,
} from '../actions/types';

const initialState = {
  messages: null,
  current: null,
  loading: false,
  error: null,
};

const logReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LOGS:
      return {
        ...state,
        messages: action.payload,
        loading: false,
      };

    case ADD_LOG:
      return {
        ...state,
        messages: [...state.messages, action.payload],
        loading: false,
      };

    case DELETE_LOG:
      return {
        ...state,
        messages: state.messages.filter((i) => i._id !== action.payload),
        loading: false,
      };

    case UPDATE_LOG:
      return {
        ...state,
        messages: state.messages.map((i) =>
          i._id === action.payload._id ? action.payload : i
        ),
      };

    case SEARCH_LOGS:
      return {
        ...state,
        messages: action.payload,
        loading: false,
      };

    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };

    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };

    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    case LOGS_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default logReducer;

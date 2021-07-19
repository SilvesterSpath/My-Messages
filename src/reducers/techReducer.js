import {
  ADD_TECH,
  DELETE_TECH,
  GET_TECHS,
  SET_LOADING,
  TECHS_ERROR,
} from '../actions/types';

const initialState = {
  persons: null,
  loading: false,
  error: null,
};

const techReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TECHS:
      return {
        ...state,
        persons: action.payload,
        loading: false,
      };

    case ADD_TECH:
      return {
        ...state,
        persons: [...state.persons, action.payload],
        loading: false,
      };

    case DELETE_TECH:
      return {
        ...state,
        persons: state.persons.filter((i) => i.id !== action.payload),
        loading: false,
      };

    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    case TECHS_ERROR:
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

export default techReducer;

import {
  ADD_TECH,
  DELETE_TECH,
  GET_TECHS,
  SET_LOADING,
  TECHS_ERROR,
} from './types';
import axios from 'axios';

// Get techs from server
export const getTechs = () => async (dispatch) => {
  try {
    setLoading();

    const res = await axios.get('api/persons');
    /* const data = await res.json(); */
    console.log(res.data);

    dispatch({
      type: GET_TECHS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: TECHS_ERROR,
      payload: error.response.message,
    });
  }
};

// Add tech
export const addTech = (person) => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch('/persons', {
      method: 'POST',
      body: JSON.stringify(person),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();

    dispatch({
      type: ADD_TECH,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TECHS_ERROR,
      payload: error.response.message,
    });
  }
};

// Delete Tech from server
export const deleteTech = (id) => async (dispatch) => {
  try {
    setLoading();

    await fetch(`/persons/${id}`, {
      method: 'DELETE',
    });

    dispatch({
      type: DELETE_TECH,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: TECHS_ERROR,
      payload: error.response.message,
    });
  }
};

// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};

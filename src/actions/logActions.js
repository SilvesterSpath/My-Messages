import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  DELETE_LOG,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_LOG,
  SEARCH_LOGS,
  CLEAR_FILTER,
} from './types';
import axios from 'axios';

/* export const getLogs = () => {
  return async (dispatch) => {
    setLoading();

    const res = await fetch('/logs');
    const data = await res.json();

    dispatch({
      type: GET_LOGS,
      payload: data,
    });
  };
}; */

// Get logs from server
export const getLogs = () => async (dispatch) => {
  try {
    setLoading();

    const res = await axios.get('/api/messages');

    dispatch({
      type: GET_LOGS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.message,
    });
  }
};

// Add new log
export const addLog = (message) => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch('/api/messages', {
      method: 'POST',
      body: JSON.stringify(message),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();

    dispatch({
      type: ADD_LOG,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.message,
    });
  }
};

// Delete log from server
export const deleteLog = (id) => async (dispatch) => {
  try {
    setLoading();

    await fetch(`/api/messages/${id}`, {
      method: 'DELETE',
    });

    dispatch({
      type: DELETE_LOG,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.message,
    });
  }
};

// Update log on server
export const updateLog = (message) => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch(`/api/messages/${message.id}`, {
      method: 'PUT',
      body: JSON.stringify(message),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();

    dispatch({
      type: UPDATE_LOG,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.statusText,
    });
  }
};

// Filter Messages
export const searchLogs = (text) => async (dispatch) => {
  dispatch({ type: SEARCH_LOGS, payload: text });
};

// Clear Filter
export const clearFilter = () => async (dispatch) => {
  dispatch({ type: CLEAR_FILTER });
};

// Set Current log
export const setCurrent = (message) => {
  return {
    type: SET_CURRENT,
    payload: message,
  };
};

// Clear Current log
export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT,
  };
};

// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};

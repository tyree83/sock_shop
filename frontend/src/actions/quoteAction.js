import axios from 'axios';

import {
  QUOTE_CREATE_REQUEST,
  QUOTE_CREATE_SUCCESS,
  QUOTE_CREATE_FAIL,
  QUOTE_CREATE_RESET,
} from '../constants/quoteConstants';

export const createQUOTE = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: QUOTE_CREATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(`/api/quotes`, {}, config);

    dispatch({
      type: QUOTE_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === 'Not authorized, token failed') {
      dispatch(logout());
    }
    dispatch({
      type: QUOTE_CREATE_FAIL,
      payload: message,
    });
  }
};

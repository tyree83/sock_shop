import {
  QUOTE_CREATE_REQUEST,
  QUOTE_CREATE_SUCCESS,
  QUOTE_CREATE_FAIL,
  QUOTE_CREATE_RESET,
} from '../constants/quoteConstants';

export const quoteCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case QUOTE_CREATE_REQUEST:
      return { loading: true };
    case QUOTE_CREATE_SUCCESS:
      return { loading: false, success: true, quote: action.payload };
    case QUOTE_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case QUOTE_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

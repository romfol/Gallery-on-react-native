import { GET_PHOTOS_REQUEST, GET_PHOTOS_SUCCESS, GET_PHOTOS_FAILED } from '../../constants';

const initState = {
  data: [],
  isFetching: false,
  error: false,
};

export default (state = initState, action) => {
  switch (action.type) {
    case GET_PHOTOS_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case GET_PHOTOS_SUCCESS:
      return {
        ...state,
        data: action.request,
        isFetching: false,
      };
    case GET_PHOTOS_FAILED:
      return {
        ...state,
        error: action.error,
        isFetching: false,
      };
    default:
      return state;
  }
};

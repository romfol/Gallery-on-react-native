import { GET_PHOTOS_SUCCESS, GET_PHOTOS_REQUEST } from '../../constants';

const initState = {
  data: [],
  isFetching: false,
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
    default:
      return state;
  }
};

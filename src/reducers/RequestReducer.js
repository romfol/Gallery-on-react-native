import { GET_API } from '../../constants';

const initState = {
  data: [],
  isFetching: false,
};

export default (state = initState, action) => {
  switch (action.type) {
    case GET_API:
      return {
        ...state,
        data: action.request,
      };
    default:
      return state;
  }
};

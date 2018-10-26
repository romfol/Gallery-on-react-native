import { GET_API } from '../../constants';

const initState = {
  data: [],
};

export default function RequestReducer(state = initState, action) {
  switch (action.type) {
    case GET_API:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
}

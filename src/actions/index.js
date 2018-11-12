import { GET_PHOTOS_REQUEST, GET_PHOTOS_SUCCESS, API } from '../../constants';

export const getApi = () => {
  return dispatch => {
    dispatch({
      type: GET_PHOTOS_REQUEST,
    });

    fetch(API)
      .then(results => results.json(), error => console.log('error reason: ', error))
      .then(results => {
        dispatch({
          type: GET_PHOTOS_SUCCESS,
          request: results,
        });
      });
  };
};

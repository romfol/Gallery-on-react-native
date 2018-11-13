import { GET_PHOTOS_REQUEST, GET_PHOTOS_SUCCESS, GET_PHOTOS_FAILED, API } from '../../constants';

export const getApi = () => {
  return dispatch => {
    dispatch({
      type: GET_PHOTOS_REQUEST,
    });

    fetch(API)
      .then(results => results.json())
      .then(results => {
        dispatch({
          type: GET_PHOTOS_SUCCESS,
          request: results,
        });
      })
      .catch(error => {
        console.log("error's reason: ", error);
        dispatch({
          type: GET_PHOTOS_FAILED,
          error: true,
        });
      });
  };
};

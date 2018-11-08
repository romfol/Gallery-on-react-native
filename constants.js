import { Dimensions } from 'react-native';

const window = Dimensions.get('window');
export const h = window.height;
export const w = window.width;

export const API =
  'https://api.unsplash.com/photos/?client_id=f571da0ddf69c551d528f430bf27ab7f711a9a9d24179e57220a11998e72d3fd';

//action types
export const GET_PHOTOS_SUCCESS = 'GET_PHOTOS_SUCCESS';
export const GET_PHOTOS_REQUEST = 'GET_PHOTOS_REQUEST';

//routes
export const HOME_PAGE = 'HOME_PAGE';
export const DETAILS_PAGE = 'DETAILS_PAGE';

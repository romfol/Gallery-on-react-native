import { Dimensions } from 'react-native';

const window = Dimensions.get('window');
export const h = window.height;
export const w = window.width;

//action type
export const GET_API = 'GET_API';

//routes
export const HOME_PAGE = 'HOME_PAGE';
export const DETAILS_PAGE = 'DETAILS_PAGE';

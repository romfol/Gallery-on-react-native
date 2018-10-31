import { GET_API } from '../constants';

export const getApi = () => ({
  type: GET_API,
  request: fetch(
    'https://api.unsplash.com/photos/?client_id=f571da0ddf69c551d528f430bf27ab7f711a9a9d24179e57220a11998e72d3fd'
  ),
});

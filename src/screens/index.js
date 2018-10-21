import { createStackNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import { HOME_PAGE, DETAILS_PAGE } from '../../routes';

export default createStackNavigator(
  {
    [HOME_PAGE]: HomeScreen,
    [DETAILS_PAGE]: DetailsScreen,
  },
  {
    headerMode: 'none',
  }
);

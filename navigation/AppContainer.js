import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from '../screens/Home';
import About from '../screens/About';

const AppNavigation = createStackNavigator({
  Home: { screen: Home },
  About: { screen: About},
});

const AppContainer = createAppContainer(AppNavigation);

export default AppContainer;


import { createStackNavigator, createAppContainer, createBottomTabNavigator, createSwitchNavigator } from 'react-navigation';

import Home from "../screens/Home";
import LoginScreen from "../screens/LoginScreen";
import SplashScreen from "../screens/SplashScreen";
import Signup from "../screens/Signup";
import Dashboard from "../screens/Dashboard";

const AppStackNav = createStackNavigator({
  SplashScreen: {
		screen: SplashScreen,
		navigationOptions: {
			header: null
		}
	},
  Home: {
		screen: Home,
		navigationOptions: {
			header: null
		}
	},
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      header: null
    }
  },
	Signup: {
		screen: Signup,
		navigationOptions: {
			header: null
		}
	},
	Dashboard: { screen: Dashboard }
});

export default AppStackNav;

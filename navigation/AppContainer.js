import React, { Component } from 'react';
import { createStackNavigator, createAppContainer, createBottomTabNavigator, createSwitchNavigator } from 'react-navigation';
import Home from '../screens/Home';
import About from '../screens/About';
import Initializing from '../screens/Initializing';
import Ionicons from 'react-native-vector-icons/Ionicons';
import IconWithBadge from '../icons/IconWithBadge';
import HomeIconWithBadge from '../icons/HomeIconWithBadge';

import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';

const AppNavigationStack = createStackNavigator({
  About: { screen: About},
  Initializing: { screen: Initializing },
});

const TabNavigator = createBottomTabNavigator({
  Home: Home,
  About: AppNavigationStack,
},
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
          // Sometimes we want to add badges to some icons.
          // You can check the implementation below.
          IconComponent = HomeIconWithBadge;
        } else if (routeName === 'About') {
          iconName = `ios-options`;
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
);



const RootNavigator = createSwitchNavigator({
  App: TabNavigator,
  LoginScreen: LoginScreen,
  Splash: SplashScreen
}, {
  initialRouteName: 'Splash'
});

const AppContainer = createAppContainer(RootNavigator);

export default AppContainer;

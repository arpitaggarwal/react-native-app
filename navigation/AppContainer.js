import React, { Component } from 'react';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import Home from '../screens/Home';
import About from '../screens/About';
import Ionicons from 'react-native-vector-icons/Ionicons';
import IconWithBadge from '../icons/IconWithBadge';
import HomeIconWithBadge from '../icons/HomeIconWithBadge';


const AppNavigation = createStackNavigator({
  Home: { screen: Home },
  About: { screen: About},
});

const TabNavigator = createBottomTabNavigator({
  Home: Home,
  About: About,
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

const AppContainer = createAppContainer(TabNavigator);

export default AppContainer;

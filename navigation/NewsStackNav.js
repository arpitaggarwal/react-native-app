//import { StackNavigator } from "react-navigation";
import { createStackNavigator, createAppContainer, createBottomTabNavigator, createSwitchNavigator } from 'react-navigation';

import NewsTabNav from "./NewsTabNav";
import Initializing from "../screens/Initializing";

const NewsStackNav = createStackNavigator(
	{
		NewsTabNav: { screen: NewsTabNav },
		Initializing: { screen: Initializing }
	},
	{
		headerMode: "none"
	}
);

export default NewsStackNav;

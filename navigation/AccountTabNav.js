//import { TabNavigator } from "react-navigation";
import { createBottomTabNavigator, createSwitchNavigator } from 'react-navigation';

import ExpandableList from "../screens/expandable_list";
import ListViewScreen from "../screens/list-view-screen";

const AccountTabNav = createBottomTabNavigator(
	{
		ExpandableList: { screen: ExpandableList },
		ListViewScreen: {
			screen: ListViewScreen,
			navigationOptions: {
				title: "Setting"
			}
		}
	},
	{
		backBehavior: "none",
		tabBarPosition: "bottom"
	}
);
export default AccountTabNav;

//import { DrawerNavigator } from "react-navigation";
import AccountTabNav from "./AccountTabNav";
import NewsStackNav from "./NewsStackNav";
import { createDrawerNavigator, createStackNavigator, createAppContainer, createBottomTabNavigator, createSwitchNavigator } from 'react-navigation';


// drawer stack
// const DrawerStack = createDrawerNavigator({
//   AccountTabNav: { screen: AccountTabNav },
//   NewsStackNav: { screen: NewsStackNav },
//
// }, {
//   gesturesEnabled: false
// })
//
// const DrawerNavigation = createStackNavigator({
//   DrawerStack: { screen: DrawerStack }
// }, {
//   headerMode: 'float',
//   navigationOptions: ({navigation}) => ({
//     headerStyle: {backgroundColor: 'green'},
//     title: 'Logged In to your app!',
//     gesturesEnabled: false,
//     headerLeft: <Text onPress={() => {
//       // Coming soon: navigation.navigate('DrawerToggle')
//       // https://github.com/react-community/react-navigation/pull/2492
//       if (navigation.state.index === 0) {
//         navigation.navigate('DrawerOpen')
//       } else {
//         navigation.navigate('DrawerClose')
//       }
//     }}>Menu</Text>
//   })
// })



 const AppDrawerNav = createDrawerNavigator({
 	News: {
 		screen: NewsStackNav,
 		navigationOptions: {
 			title: "News"
 		}
 	},
 	Account: {
 		screen: AccountTabNav,
 		navigationOptions: {
 			title: "Account"
 		}
 	}
 }, {
   headerMode: 'float',
   navigationOptions: ({navigation}) => ({
     headerStyle: {backgroundColor: 'green'},
     title: 'Loyalty App',
     gesturesEnabled: false,
     headerLeft: <Text onPress={() => {
       // Coming soon: navigation.navigate('DrawerToggle')
       // https://github.com/react-community/react-navigation/pull/2492
       if (navigation.state.index === 0) {
         navigation.navigate('DrawerOpen')
       } else {
         navigation.navigate('DrawerClose')
       }
     }}>Menu</Text>
   })
 });

export default AppDrawerNav;

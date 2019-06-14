import {Navigation} from 'react-native-navigation';

export function registerScreens() {
  Navigation.registerComponent('Home', () => require('../screens/Home').default);
  Navigation.registerComponent('Initializing', (sc) => require('../screens/Initializing').default);
  Navigation.registerComponent('SignIn', () => require('../screens/SignIn').default);
  Navigation.registerComponent('SignUp', () => require('../screens/SignUp').default);
  Navigation.registerComponent('Screen2', () => require('../screens/Screen2').default);
}

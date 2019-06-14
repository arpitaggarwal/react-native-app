import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {registerScreens} from './navigation/Screens.js';
import {Navigation} from 'react-native-navigation';

AppRegistry.registerComponent(appName, () => App);

registerScreens();

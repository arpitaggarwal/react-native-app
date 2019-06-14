import React, {Component, Fragment} from 'react';
import ImageScreen from './image-screen.js'
import ListViewScreen from './list-view-screen.js'
import Routes from './routes/Routes.js'
//import {Navigation} from 'react-native-navigation';
//import {registerScreens} from './navigation/Screens.js';


import AppContainer from './navigation/AppContainer.js';

type Props = {};

export default class App extends Component {

   constructor(props){
      super(props);
   }

   render() {
     return (
         <AppContainer />
        // <Fragment>
        //    <ImageScreen />
        //    <Routes />
        //    <ListViewScreen />
        // </Fragment>
     );
   }
 }

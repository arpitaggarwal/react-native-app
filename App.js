import React, {Component, Fragment} from 'react';
import ImageScreen from './image-screen.js'
import ListViewScreen from './list-view-screen.js'
import Routes from './routes/Routes.js'

type Props = {};

export default class App extends Component<Props> {

  constructor(props){
     super(props);
   }

  render() {
    return (
        <Fragment>
           <ImageScreen />
           <Routes />
           <ListViewScreen />
        </Fragment>
    );
  }
}

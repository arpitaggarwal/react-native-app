/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component, Fragment} from 'react';
import {TouchableOpacity, ActivityIndicator, Alert, Platform, StyleSheet, Text, View, ScrollView} from 'react-native';
import ImageScreen from './image-screen.js'
import Routes from './routes/Routes.js'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  constructor(props){
     super(props);
     this.state = {
       data: []
    }
   }

   getData(){
       fetch('https://jsonplaceholder.typicode.com/users', {
           method: 'GET',
           headers: {
             'Content-Type': 'application/json',
           }}).then((response) => response.json()).then((responseJson) => {
         this.setState({data: responseJson})
        }).catch((error) => {
             console.error(error);
        });
   }

     componentDidMount(){
       this.getData();
     }

  alertItemName = (item) => {
       alert(item.name)
  }


  render() {
    return (
<Fragment>

     <ImageScreen />

<Routes />
          <View style={styles.container}>
    <ScrollView>

            {
    //

        this.state.data.map((item, index) => (
           <TouchableOpacity
              key = {item.id}
              style = {styles.listContainer}
              onPress = {() => this.alertItemName(item)}>
              <Text style = {styles.text}>
                 {item.name}
              </Text>
           </TouchableOpacity>
        ))
            // <TouchableOpacity onPress={this.handlePress.bind(this)}>
            //    <Text style={{paddingTop: 50, paddingLeft: 50, color: '#FF0000'}}> Click me to see the name </Text>
            // </TouchableOpacity>
          }
        </ScrollView>
      </View>

      </Fragment>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  listContainer: {
     padding: 10,
     marginTop: 3,
     backgroundColor: '#d9f9b1',
     alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  text: {
     flexDirection: 'row',
     justifyContent: 'space-between',
     alignItems: 'center',
     padding: 30,
     margin: 2,
     borderColor: '#2a4944',
     borderWidth: 1,
     backgroundColor: '#d2f7f1'
  },
});

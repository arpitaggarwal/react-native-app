
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import ListViewScreen from '../list-view-screen.js'

export class Home extends Component {
  render() {
    return (

       <ListViewScreen />

    //   <View style={styles.container}>
     //
    //      <Button
    //        title="About Page"
    //        onPress={() =>
    //          this.props.navigation.navigate('About')
    //        }
    //      />
    //  </View>
    )
  }
}

export default Home

const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#fff',
     alignItems: 'center',
     justifyContent: 'center',
   },
 });

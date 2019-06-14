
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export class About extends Component {
  render() {
    return (
      <View style={styles.container}>

         <Button
           title="Go to Home Page"
           onPress={() =>
             this.props.navigation.navigate('Home')
           }
         />
       </View>
    )
  }
}

export default About

const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#fff',
     alignItems: 'center',
     justifyContent: 'center',
   },
 });

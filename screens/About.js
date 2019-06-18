
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export class About extends Component {
  render() {
    return (
      <View style={styles.container}>

         <Button
           title="Go to Initializing Page"
           onPress={() =>
             this.props.navigation.navigate('Initializing')
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
    justifyContent: 'center',
    alignItems: 'center'
  },
 });

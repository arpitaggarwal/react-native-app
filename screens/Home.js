
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        
         <Button
           title="About Page"
           onPress={() =>
             this.props.navigation.navigate('About')
           }
         />
       </View>
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

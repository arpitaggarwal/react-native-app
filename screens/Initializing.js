import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  AsyncStorage
} from 'react-native'
import ListViewScreen from './list-view-screen.js'
//import { goToAuth, goHome } from './Navigation'

//import { USER_KEY } from './config'

export default class Initializing extends React.Component {
  // async componentDidMount() {
  //   try {
  //     const user = await AsyncStorage.getItem(USER_KEY)
  //     console.log('user: ', user)
  //     if (user) {
  //       goHome()
  //     } else {
  //       goToAuth()
  //     }
  //   } catch (err) {
  //     console.log('error: ', err)
  //     goToAuth()
  //   }
  // }

  render() {
    return (

           <ListViewScreen />

      // Loading message commented for list(s)
        // <View style={styles.container}>
        //   <Text style={styles.welcome}>Loading</Text>
        // </View>
    )
  }
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 28
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

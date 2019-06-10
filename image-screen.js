import React, { Component } from 'react'
import { Image } from 'react-native'
import {StyleSheet} from 'react-native';

const ImageScreen = () => (

   <Image style={styles.logo} source = {require('./images/arpit.jpg')} />

)
export default ImageScreen

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 150,
  },
});

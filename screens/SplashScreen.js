import React from 'react';
import { View, Text } from 'react-native';

const TWO_SECONDS = 2000;

export default class SplashScreen extends React.Component {
  componentDidMount() {
    // When mounted, wait one second, then navigate to App
    setTimeout(() => {
      this.props.navigation.navigate('LoginScreen');
    }, TWO_SECONDS);
  }

  render() {

    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'orange',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text>Loyalty App by Arpit Aggarwal</Text>
      </View>
    );
  }
}

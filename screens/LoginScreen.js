
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity} from 'react-native';
import { NavigationActions, StackActions } from "react-navigation";
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from 'react-native-google-signin';


export class LoginScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userInfo: '',
    };
  }

  componentDidMount() {
      GoogleSignin.configure({
        //It is mandatory to call this method before attempting to call signIn()
        scopes: ['https://www.googleapis.com/auth/drive.readonly'],
        // Repleace with your webClientId generated from Firebase console
        webClientId:
          '637354362427-tev6rqihk89aosm1iqbjcust5fb8hvrh.apps.googleusercontent.com',
          offlineAccess: true
      });
    }

    _signIn = async () => {
    //Prompts a modal to let the user sign in into your application.
    try {
      await GoogleSignin.hasPlayServices({
        //Check if device has Google Play Services installed.
        //Always resolves to true on iOS.
        showPlayServicesUpdateDialog: true,
      });
      const userInfo = await GoogleSignin.signIn();
      console.log('User Info --> ', userInfo);
      this.setState({ userInfo: userInfo });
      this.props.navigation.navigate('App', {userInfo: "Hello",});
      console.log('User Info --> ', userInfo.name);
    } catch (error) {
      console.log('Message', error.message);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('User Cancelled the Login Flow');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('Signing In');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('Play Services Not Available or Outdated');
      } else {
        console.log('Some Other Error Happened');
      }
    }
  };

  _getCurrentUser = async () => {
    //May be called eg. in the componentDidMount of your main component.
    //This method returns the current user
    //if they already signed in and null otherwise.
    try {
      const userInfo = await GoogleSignin.signInSilently();
      this.setState({ userInfo });
    } catch (error) {
      console.error(error);
    }
  };

  _signOut = async () => {
    //Remove user session from the device.
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      this.setState({ user: null }); // Remove the user from your app's state as well
    } catch (error) {
      console.error(error);
    }
  };

  _revokeAccess = async () => {
    //Remove your application from the user authorized applications.
    try {
      await GoogleSignin.revokeAccess();
      console.log('deleted');
    } catch (error) {
      console.error(error);
    }
  };

  resetToDashboard() {
      this.props.navigation.dispatch(
        StackActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: "Dashboard" })]
        })
      );
    }

  render() {
    const { navigation } = this.props;
    return (

      // <View style={styles.container}>
      //         <GoogleSigninButton
      //           style={{ width: 312, height: 48 }}
      //           size={GoogleSigninButton.Size.Wide}
      //           color={GoogleSigninButton.Color.Light}
      //           onPress={this._signIn}
      //         />
      // </View>


      <View style={styles.container}>
       <Text style={styles.welcome}>Login</Text>
       <TouchableOpacity onPress={() => this.resetToDashboard()}>
         <Text style={[styles.link, { color: "blue" }]}>Go to Dashboard</Text>
       </TouchableOpacity>
       <TouchableOpacity onPress={() => navigation.goBack()}>
         <Text style={styles.link}>Go Back</Text>
       </TouchableOpacity>
     </View>

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

export default LoginScreen

const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#fff',
     alignItems: 'center',
     justifyContent: 'center',
   },
 });

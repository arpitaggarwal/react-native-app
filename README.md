# Run Application

```
react-native run-android
```

# Genymotion Devices List

Open Genymotion shell and execute below command:

```
$ devices list
```

# Genymotion Setup

- Change Genymotion SDK

# Android Setup

- Update Android Path for tools, platform-tools and emulators

# ADB Connect to Genymotion Device

```
adb connect 192.168.71.101:5555
```

# Build React Native Metro

```
react-native start
```

# Atom Plugin for React Native

- Nuclide

# Uninstall App from Device Using ADB

```
adb uninstall com.propertyfinder
```


# REST API

https://jsonplaceholder.typicode.com/users


# Change Application Name

- Go to `android/app/src/main/res/values`
- Edit `strings.xml`

# Change Application Icon

- Generate Icons from https://makeappicon.com/
- Drop it in `android/app/src/main/res`

# Change Any Application Setting

- Go to `android/app/src/main`
- Edit `AndroidManifest.xml`

# Generate SHA1

```
keytool -list -v -keystore ~/.android/debug.keystore -alias androiddebugkey -storepass android -keypass android
```

# Fix for Google Sign In Library

https://github.com/react-native-community/react-native-google-signin/issues/688


# References:

- https://alligator.io/react/react-native-navigation/

- https://aboutreact.com/example-of-google-sign-in-in-react-native/

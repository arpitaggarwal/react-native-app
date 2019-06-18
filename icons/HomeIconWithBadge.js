import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { Image } from 'react-native'
import IconWithBadge from './IconWithBadge.js'

const HomeIconWithBadge = (props) => {
  // You should pass down the badgeCount in some other ways like react context api, redux, mobx or event emitters.
  return <IconWithBadge {...props} badgeCount={3} />;
}
export default HomeIconWithBadge

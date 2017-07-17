
import React from 'react';
import {
  AppRegistry,
  Text,
  Button,
  View,
} from 'react-native';

import RootNavigator from './app/router/rootnavigator.js'

AppRegistry.registerComponent('MallApp', () => RootNavigator);


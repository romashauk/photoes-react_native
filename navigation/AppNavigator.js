import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import LinksScreen from '../screens/LinksScreen';
import HomeScreen from '../screens/HomeScreen';
export default createAppContainer(
  createSwitchNavigator({
    Main: HomeScreen,
    LinksScreen,
  })
);

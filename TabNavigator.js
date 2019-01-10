import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Home from './Home';
import Explore from './Explore';
import Tasks from './Tasks';


const TabNavigator = createBottomTabNavigator({
  Home: Home,
  Explore: Explore,
  Tasks:Tasks,
});

export default createAppContainer(TabNavigator);

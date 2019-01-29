import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Home from './Home';
import Explore from './Explore';
import Tasks from './Tasks';
import Activity from './Activity';
import Profile from './Profile';

const TabNavigator = createBottomTabNavigator({
  Home: Home,
  Explore: Explore,
  Tasks:Tasks,
  Activity:Activity,
  Profile:Profile
});

export default createAppContainer(TabNavigator);

/** @format */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import AppContainer from './Stacknavigation';
import Profile from './Profile'
AppRegistry.registerComponent(appName, () => Profile);

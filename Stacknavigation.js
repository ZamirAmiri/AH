import {createStackNavigator} from 'react-navigation';
import {createAppContainer} from 'react-navigation';

import Login from "./Login";
import Register from "./Register";
import App from './App';

const StackNav = createStackNavigator({
  Register:{screen:Register},
  Login:{screen:Login},
  App:{screen:App},
});

const AppContainer = createAppContainer(StackNav);
export default AppContainer;

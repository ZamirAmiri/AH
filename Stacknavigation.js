import {createStackNavigator} from 'react-navigation';
import {createAppContainer} from 'react-navigation';

import Login from "./Login";
import Register from "./Register";
import App from './App';

const StackNav = createStackNavigator({
  App:{screen:App},
  Register:{screen:Register},
  Login:{screen:Login},
});

const AppContainer = createAppContainer(StackNav);
export default AppContainer;

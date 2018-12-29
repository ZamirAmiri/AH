import {createStackNavigator} from 'react-navigation';
import {createAppContainer} from 'react-navigation';

import Login from "./Login";
import Register from "./Register";
import App from './App';
import Loading from './Loading';
import Recovery from './Recovery';

const StackNav = createStackNavigator({
  App:{screen:App},
  Register:{screen:Register},
  Login:{screen:Login},
  Loading:{screen:Loading},
  Recovery:{screen:Recovery},
});

const AppContainer = createAppContainer(StackNav);
export default AppContainer;

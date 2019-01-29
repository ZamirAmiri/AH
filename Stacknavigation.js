import {createStackNavigator} from 'react-navigation';
import {createAppContainer} from 'react-navigation';

import Login from "./Login";
import Register from "./Register";
import App from './App';
import Loading from './Loading';
import Recovery from './Recovery';
import Home from './Home';
import TabNavigator from './TabNavigator';
import Explore from './Explore';
import Tasks from './Tasks';

const StackNav = createStackNavigator({
    App:{screen:App},
    TabNavigator:{screen:TabNavigator},
    Tasks:{screen:Tasks},
    Explore:{screen:Explore},
    Home:{screen:Home},
    Register:{screen:Register},
    Login:{screen:Login},
    Loading:{screen:Loading},
    Recovery:{screen:Recovery},
  },
  {defaultNavigationOptions:
    {
      header:null
    }
  }
);

const AppContainer = createAppContainer(StackNav);
export default AppContainer;

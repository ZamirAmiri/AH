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
import Activity from './Activity';
import Profile from './Profile';
const StackNav = createStackNavigator({
    Profile:{screen:Profile},
    Activity:{screen:Activity},
    Tasks:{screen:Tasks},
    TabNavigator:{screen:TabNavigator},
    Explore:{screen:Explore},
    Home:{screen:Home},
    App:{screen:App},
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

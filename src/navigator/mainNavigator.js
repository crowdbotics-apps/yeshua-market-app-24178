import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps199166Navigator from '../features/Maps199166/navigator';
import Additem199165Navigator from '../features/Additem199165/navigator';
import Maps199161Navigator from '../features/Maps199161/navigator';
import UserProfile199157Navigator from '../features/UserProfile199157/navigator';
import Maps199117Navigator from '../features/Maps199117/navigator';
import Additem199116Navigator from '../features/Additem199116/navigator';
import Maps199112Navigator from '../features/Maps199112/navigator';
import UserProfile199108Navigator from '../features/UserProfile199108/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps199166: { screen: Maps199166Navigator },
Additem199165: { screen: Additem199165Navigator },
Maps199161: { screen: Maps199161Navigator },
UserProfile199157: { screen: UserProfile199157Navigator },
Maps199117: { screen: Maps199117Navigator },
Additem199116: { screen: Additem199116Navigator },
Maps199112: { screen: Maps199112Navigator },
UserProfile199108: { screen: UserProfile199108Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;

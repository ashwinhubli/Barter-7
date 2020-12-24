import React from 'react';
import Settings from '../screens/Settings';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator'
import CustomSideBarMenu  from './CustomSideBarMenu';
import MyBarterScreen from '../screens/MyBarters';

export const AppDrawerNavigator = createDrawerNavigator({
  Home : {
    screen : AppTabNavigator
    },
   Settings: {
    screen : Settings
    },
   MyBarters:{
      screen : MyBarterScreen
    },
  },
  {
    contentComponent:CustomSideBarMenu
  },
  {
    initialRouteName : 'Home'
  })

import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import ExchangeScreen from '../screens/ExchangeScreen';
import HomeScreen from '../screens/Homescreen'


export const AppTabNavigator = createBottomTabNavigator({
  ExchangeItems : {
    screen: HomeScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/homescreen.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Exchange Items",
    }
  },
  ItemRequest: {
    screen: ExchangeScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/exchange.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Item Request",
    }
  }
});

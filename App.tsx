/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeScreen } from './task2/home/homeScreen';
import {NotificationScreen} from './task2/explore/notificationScreen';
import { CategoryScreen } from './task2/category/categoryScreen';
import { AccountScreen } from './task2/account/accountScreen';
import { CartScreen } from './task2/cart/cartScreen';
import HomeIcon from 'react-native-vector-icons/AntDesign';
import ExploreIcon from 'react-native-vector-icons/AntDesign';

import {Image} from 'react-native'
import { NativeModules } from 'react-native'
import { ASSETS } from './task2/Icons';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function App(): React.JSX.Element {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen}options={{
            tabBarIcon: ({color, size}) => (
              <HomeIcon name="home" color={color} size={size}/>
            )
          }}/>
          <Tab.Screen name="Categories" component={CategoryScreen} options={{
            tabBarIcon: () => (
              <Image style={{height : 20, width : 20}}source={ASSETS.CategoryIcon}/>
            )
          }}/>
          <Tab.Screen name="Notifications" component={NotificationScreen} options={{
            tabBarIcon: () => (
              <Image style={{height : 24, width : 20}} source={ASSETS.NotificationIcon}/>
            )
          }}/>
          <Tab.Screen name="Account" component={AccountScreen} options={{
            tabBarIcon: () => (
              <Image source={ASSETS.AccountIcon}/>
            )
          }}/>
          <Tab.Screen name="Cart" component={CartScreen} options={{
            tabBarIcon: () => (
              <Image source={ASSETS.CartIcon}/>
            )
          }}/> 
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
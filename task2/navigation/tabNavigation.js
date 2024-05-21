import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeScreen } from '../screens/home/homeScreen';
import { NotificationScreen } from '../screens/notification/notificationScreen';
import { CategoryScreen } from '../screens/category/categoryScreen';
import { AccountScreen } from '../screens/account/accountScreen';
import { CartScreen } from '../screens/cart/cartScreen';
import HomeIcon from 'react-native-vector-icons/AntDesign';
import ExploreIcon from 'react-native-vector-icons/AntDesign';
import SearchIcon from 'react-native-vector-icons/FontAwesome';
import MicIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Alert, Image, View, TextInput } from 'react-native'
import { NativeModules } from 'react-native'
import { IMAGE } from "../images/index"
import { StackNavigation } from './stackNavigation';
import { ContentItems } from '../components/content/contentItem';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();


export function TabNavigation() {
  return (
    <>
      {/* <NavigationContainer> */}
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} options={{
          tabBarIcon: ({ color, size }) => (
            <HomeIcon name="home" color={color} size={size} />
          )
        }} />

        <Tab.Screen name="Categories" component={CategoryScreen} options={{
          title: "All Categories", headerRight: () => (
            <View style={{ flex: 1, flexDirection: "row", alignItems: "center", padding: 15 }}>
              <SearchIcon name="search" size={18} style={{ paddingRight: 20, color: "black" }} onPress={() => Alert.alert("Message", "Search Clicked!")} />
              <MicIcon name="microphone" size={22} style={{ color: "black" }} onPress={() => Alert.alert("Message", "MicroPhone Clicked!")} />
            </View>
          ),

          tabBarIcon: ({ color, size, focused }) => (
            <Image style={{ height: 20, width: 20, tintColor: focused ? "rgb(0, 122, 255)" : "dimgray" }} source={IMAGE.CategoryIcon} />
          )
        }} />
        <Tab.Screen name="Notifications" component={NotificationScreen} options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Image style={{ height: 24, width: 20, tintColor: focused ? "rgb(0, 122, 255)" : "dimgray" }} source={IMAGE.NotificationIcon} />
          )
        }} />
        <Tab.Screen name="Account" component={AccountScreen} options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Image style={{ tintColor: focused ? "rgb(0, 122, 255)" : "dimgray" }} source={IMAGE.AccountIcon} />
          )
        }} />
        <Tab.Screen name="Cart" component={CartScreen} options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Image style={{ tintColor: focused ? "rgb(0, 122, 255)" : "dimgray" }} source={IMAGE.CartIcon} />
          )
        }} />
      </Tab.Navigator>
    </>
  )
}




{/* <Tab.Screen name="Categories" component={CategoryScreen} options={{
            title: "All Categories", headerRight: () => (
              <View style={{ flex: 1, flexDirection: "row", alignItems: "center", padding: 15 }}>
                <SearchIcon name="search" size={18} style={{ paddingRight: 20, color: "black" }} onPress={() => Alert.alert("Message", "Search Clicked!")} />
                <MicIcon name="microphone" size={22} style={{ color: "black" }} onPress={() => Alert.alert("Message", "MicroPhone Clicked!")} />
              </View>
            ),

            tabBarIcon: ({ color, size, focused }) => (
              <Image style={{ height: 20, width: 20, tintColor: focused ? "rgb(0, 122, 255)" : "dimgray" }} source={IMAGE.CategoryIcon} />
            )
          }} /> */}
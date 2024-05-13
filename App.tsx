/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { useState } from 'react';

import { TabNavigation } from './task2/navigation/tabNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ContentItems } from './task2/components/content/contentItem';
import { IMAGE } from "./task2/images/index"
import { Image, View, TextInput } from "react-native";
import SearchIcon from 'react-native-vector-icons/FontAwesome';
const Stack = createNativeStackNavigator();


function App(): React.JSX.Element {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="tabNavigator" component={TabNavigation} options={{ headerShown: false }} />
        <Stack.Screen name="ContentScreen" component={ContentItems} options={{
          headerRight: () => (
            <Image style={{ tintColor: "black" }} source={IMAGE.CartIcon} />
          ), headerTitle: () => (
            <View style={{ flexDirection: "row", borderWidth: 1, borderColor: "#9eb6db", paddingEnd: 120, borderRadius: 60, backgroundColor: "white", paddingVertical: 1, alignItems: "center" }}>
              <SearchIcon name="search" size={18} style={{ color: "grey", paddingLeft: 5 }} />
              <TextInput style={{ paddingVertical: 5, alignContent: "center", paddingTop: 1 }} placeholder='Search for Products'></TextInput>
            </View>
          ), title: '', headerStyle: { backgroundColor: "#D8E7FE" }
        }} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

export default App;


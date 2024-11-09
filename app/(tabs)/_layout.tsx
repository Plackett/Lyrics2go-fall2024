import { Link } from 'expo-router';
import React from 'react';

import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HeaderButton } from '../../components/HeaderButton';
import { Appearance } from "react-native";
import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import { StyleSheet, PlatformColor, useColorScheme } from 'react-native';
import Home from '.';
import Account from './account'
import Lyrics from './lyrics'

const Drawer = createDrawerNavigator();

const colorScheme = useColorScheme();

 export default function DrawerNavigation() {
  return (
    <Drawer.Navigator
      initialRouteName='Home'
      screenOptions={{
        drawerStyle: {
          backgroundColor: colorScheme === 'dark' ? 'black' : 'white'
        },
        drawerActiveTintColor: 'orangered',
        headerStyle: {
          backgroundColor: 'orangered',
        },
        drawerLabelStyle: {
          color: colorScheme === 'dark' ? 'white': 'black'
        }
      }}
      >
      <Drawer.Screen
        name="Home"
        component={Home}
        />
      <Drawer.Screen
        name="Account"
        component={Account}
        />
      <Drawer.Screen
        name="Lyrics"
        component={Lyrics}
        />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    width: 200,
  },
});
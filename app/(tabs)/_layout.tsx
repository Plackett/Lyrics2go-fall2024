import { Link } from 'expo-router';
import React from 'react';

import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HeaderButton } from '../../components/HeaderButton';
import { colorScheme, useColorScheme } from "nativewind";
import { Appearance } from "react-native";
import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'nativewind';
import Home from '.';
import Account from './account'
import Playlists from './playlists';

const Drawer = createDrawerNavigator();

 export default function DrawerNavigation() {
  return (
    <Drawer.Navigator
      initialRouteName='Home'
      screenOptions={{
        drawerActiveTintColor: "#1aa3ff",
        headerStyle: {
          backgroundColor: '#1aa3ff'
        }
      }}
      >
      <Drawer.Screen
        name="Home"
        component={Home}
        />
        <Drawer.Screen
          name="Playlists"
          component={Playlists}
          />
        <Drawer.Screen
          name="Account"
          component={Account}
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
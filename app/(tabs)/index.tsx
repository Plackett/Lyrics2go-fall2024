import { Stack } from 'expo-router';
import { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { colorScheme, useColorScheme } from "nativewind";
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Account from './account'
import Playlists from './playlists';
import Home from './home';

export default function App() {
  const [text, setText] = useState('');

  const handleInputChange = (input) => {
    setText(input);
  }

  const handleSubmit = () => {
    // TODO: add code here to handle song searching
    alert(`You entered: ${text}`);
  }

  const { setColorScheme } = useColorScheme();
  setColorScheme("system");

  return (
    <>
      <Stack.Screen options={{ title: 'Home' }} />
      <Text className='text-4xl ml-auto mr-auto top-1/4'>Welcome to Lyrics2go!</Text>
      <View className='flex p-6 w-full h-full justify-center items-center'>
        <TextInput className="border-teal-300 border-2 pl-1.5 pr-1.5 size-auto font-black text-3xl rounded-2xl bg-emerald-200" onChangeText={handleInputChange} value={text} placeholder="Enter the name of a song"/>
        <Button title="Search" onPress={handleSubmit}/>
      </View>
    </>
  );
}


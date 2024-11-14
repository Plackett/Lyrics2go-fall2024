import { Stack, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { colorScheme, useColorScheme } from "nativewind";
import 'react-native-gesture-handler';
import React from 'react';
import styles from './_layout'
import Lyrics from './lyrics'
import firebase from 'firebase/compat';
import { useAuth } from '../useAuth.js';

export default function Home() {
  const [text, setText] = useState('');
  const router = useRouter();

  // call code elsewhere to avoid the weird warnings
  const user = useAuth();

  const handleLogout = async () => {
    try {
      await firebase.auth().signOut();
      router.push('/login'); // Redirect to login page after logging out
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const handleInputChange = (input: React.SetStateAction<string>) => {
    setText(input);
  }

  const handleSubmit = () => {
    
  }

  const { setColorScheme } = useColorScheme();
  setColorScheme("system");

  // explanation: adds user.email to the welcome phrase IF AND ONLY IF the user is logged in (not null)
  return (
    <>
      <Stack.Screen options={{ title: 'Home', headerTintColor: 'white' }} />
      {user ? (
        <>
          <Text className='text-4xl ml-auto mr-auto top-1/4'>Welcome {user.email}, to Lyrics2go!</Text>
          <Button title="Log Out" onPress={handleLogout} />
        </>
      ) : (
        <Text className='text-4xl ml-auto mr-auto top-1/4'>Welcome to Lyrics2go!</Text>
      )}
      <View className='flex p-6 w-full h-full justify-center items-center'>
        <TextInput className="border-black border-2 pl-1.5 pr-1.5 size-auto font-black text-3xl rounded-2xl bg-blue-400" onChangeText={handleInputChange} value={text} placeholder="Enter the name of a song"/>
        <Button title="Search" onPress={handleSubmit}/>
      </View>
    </>
  );
}


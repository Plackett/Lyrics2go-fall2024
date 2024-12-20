import { Link, Stack, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, Pressable } from 'react-native';
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
    router.push('./lyrics');
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
      <Link className='mt-auto' href="../login" asChild>
        <Pressable>
          <Text className="text-2xl pt-2 pb-2 text-center justify-center bg-blue-600 text-slate-200 w-auto ml-10 mr-10 rounded-full">Log in</Text>
        </Pressable>
      </Link>
      <Link href="../signup" className='mb-auto'asChild>
        <Pressable>
          <Text className="text-2xl pt-2 pb-2 text-center justify-center border-solid border-5 hover:border-10 border-black w-auto ml-10 mr-10 rounded-full">Sign up</Text>
        </Pressable>
      </Link>
    </>
  );
}


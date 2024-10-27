import { StatusBar } from 'expo-status-bar';
import { Platform, Text, TextInput, View, Pressable, Image } from 'react-native';

import { ScreenContent } from '~/components/ScreenContent';
import GoogleSI from './google-SI';

export default function Login() {
  return (
    <>
      <View className="w-full h-full justify-center">
        <Text className="text-2xl ml-auto mr-auto mt-auto mb-1">Welcome back</Text>
        <Text className="text-xl ml-auto mr-auto mb-1 text-gray-400">Please enter your details to sign in.</Text>
        <Pressable className="ml-auto mr-auto">
          <GoogleSI></GoogleSI>
        </Pressable>
        <TextInput placeholder="Email" className="ml-10 rounded-sm text-2xl pt-2 pb-2 border-solid border-black border-5 pl-1.5" keyboardType="email-address"/>
        <TextInput placeholder="Password" className="ml-10 rounded-sm text-2xl pt-2 pb-2 border-solid border-black border-5 pl-1.5 mb-1" secureTextEntry={true}/>
        <Pressable className="mr-auto ml-auto rounded-full bg-blue-600 pl-10 pr-10 pb-1 pt-1 mb-auto">
          <Text className="text-2xl text-slate-200">Log In</Text>
        </Pressable>
      </View>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </>
  );
}
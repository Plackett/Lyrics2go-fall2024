import { StatusBar } from 'expo-status-bar';
import { Platform, Text, Button, TextInput, View, TouchableOpacity } from 'react-native';

import { ScreenContent } from '~/components/ScreenContent';

export default function Signup() {
  return (
    <>
      <View className="w-full h-full justify-center">
        <Text className="text-2xl ml-auto mr-auto">Sign Up</Text>
        <TouchableOpacity className="h-5"/>
        <TextInput placeholder="Email" className="rounded-sm text-2xl pt-2 pb-2 border-solid border-black border-5 pl-1.5" keyboardType="email-address"/>
        <TextInput placeholder="Password" className=" rounded-sm text-2xl pt-2 pb-2 border-solid border-black border-5 pl-1.5" secureTextEntry={true} />
      </View>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </>
  );
}
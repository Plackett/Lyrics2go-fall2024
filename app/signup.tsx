import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Platform, Text, TextInput, View, Pressable, Alert } from 'react-native';
import { firebase } from './firebase-config.js';
import GoogleSU from './google-SU';
import { useRouter } from 'expo-router';

export default function SignUp() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      Alert.alert('Success', 'Your account for ' + email + ' has been created successfully!');
      router.push('/');
    } catch (error) {
      Alert.alert('Error', 'Error creating account, check your details. Code: ' + error.message);
    }
  };

  return (
    <>
      <View className="h-full w-full justify-center">
        <Text className="mb-1 ml-auto mr-auto mt-auto text-2xl">Welcome!</Text>
        <Text className="mb-1 ml-auto mr-auto text-xl text-gray-400">
          Please enter your details to create an account.
        </Text>
        <Pressable className="ml-auto mr-auto">
          <GoogleSU />
        </Pressable>
        <TextInput
          placeholder="Email"
          className="border-5 ml-10 rounded-sm border-solid border-black pb-2 pl-1.5 pt-2 text-2xl"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          placeholder="Password"
          className="border-5 mb-1 ml-10 rounded-sm border-solid border-black pb-2 pl-1.5 pt-2 text-2xl"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
        <Pressable
          onPress={handleSignUp}
          className="mb-auto ml-auto mr-auto rounded-full bg-blue-600 pb-1 pl-10 pr-10 pt-1">
          <Text className="text-2xl text-slate-200">Sign Up</Text>
        </Pressable>
      </View>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </>
  );
}

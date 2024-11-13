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
      Alert.alert('Success', 'Your account for '+email+' has been created successfully!');
      router.push('/');
    } catch (error) {
      Alert.alert('Error', 'Error creating account, check your details. Code: ' + error.message);
    }
  };

  return (
    <>
      <View className="w-full h-full justify-center">
        <Text className="text-2xl ml-auto mr-auto mt-auto mb-1">Welcome!</Text>
        <Text className="text-xl ml-auto mr-auto mb-1 text-gray-400">Please enter your details to create an account.</Text>
        <Pressable className="ml-auto mr-auto">
          <GoogleSU />
        </Pressable>
        <TextInput
          placeholder="Email"
          className="ml-10 rounded-sm text-2xl pt-2 pb-2 border-solid border-black border-5 pl-1.5"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          placeholder="Password"
          className="ml-10 rounded-sm text-2xl pt-2 pb-2 border-solid border-black border-5 pl-1.5 mb-1"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
        <Pressable onPress={handleSignUp} className="mr-auto ml-auto rounded-full bg-blue-600 pl-10 pr-10 pb-1 pt-1 mb-auto">
          <Text className="text-2xl text-slate-200">Sign Up</Text>
        </Pressable>
      </View>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </>
  );
}
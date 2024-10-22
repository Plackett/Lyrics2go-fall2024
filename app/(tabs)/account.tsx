import { Stack } from 'expo-router';
import { View, Text } from 'react-native';

export default function Account() {
  return (
    <>
      <Stack.Screen options={{ title: 'Account' }} />
      <View className="justify-center items-center w-full h-full" >
        <Text className="text-1xl">Your account details will appear here when you log in.</Text>
      </View>
    </>
  );
}

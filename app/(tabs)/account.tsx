import { Stack } from 'expo-router';
import { View, Text } from 'react-native';
import { colorScheme, useColorScheme } from "nativewind";

export default function Account() {

  const { setColorScheme } = useColorScheme();
  setColorScheme("system");

  return (
    <>
      <Stack.Screen options={{ title: 'Account' }} />
      <View className="justify-center items-center w-full h-full " >
        <Text className="text-1xl">Your account details will appear here when you log in.</Text>
      </View>
    </>
  );
}

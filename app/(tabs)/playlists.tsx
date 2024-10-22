import { Stack } from 'expo-router';
import { View, Text } from 'react-native';
import { colorScheme, useColorScheme } from "nativewind";

export default function Playlists() {

  const { setColorScheme } = useColorScheme();
  setColorScheme("system");

  return (
    <>
      <Stack.Screen options={{ title: 'Playlists' }} />
      <View className="justify-center items-center w-full h-full" >
        <Text className="text-1xl">Your custom playlists will appear here when you log in.</Text>
      </View>
    </>
  );
}

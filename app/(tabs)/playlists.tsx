import { Stack } from 'expo-router';
import { View, Text } from 'react-native';

export default function Playlists() {
  return (
    <>
      <Stack.Screen options={{ title: 'Playlists' }} />
      <View className="justify-center items-center w-full h-full" >
        <Text className="text-1xl">Your custom playlists will appear here when you log in.</Text>
      </View>
    </>
  );
}

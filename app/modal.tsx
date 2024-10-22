import { StatusBar } from 'expo-status-bar';
import { Platform, Text, View } from 'react-native';

import { ScreenContent } from '~/components/ScreenContent';

export default function Modal() {
  return (
    <>
      <View className="w-full h-full justify-center">
        <Text className="text-2xl ml-auto mr-auto">More information will be written here in the future</Text>
      </View>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </>
  );
}

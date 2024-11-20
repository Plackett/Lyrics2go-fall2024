import { StatusBar } from 'expo-status-bar';
import { Platform, Text, View } from 'react-native';

import { ScreenContent } from '~/components/ScreenContent';

export default function Modal() {
  return (
    <>
      <View className="h-full w-full justify-center">
        <Text className="ml-auto mr-auto text-2xl">
          More information will be written here in the future
        </Text>
      </View>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </>
  );
}

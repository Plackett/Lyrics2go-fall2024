import { Link, Tabs } from 'expo-router';

import { HeaderButton } from '../../components/HeaderButton';
import { TabBarIcon } from '../../components/TabBarIcon';
import { colorScheme, useColorScheme } from "nativewind";
import { Appearance } from "react-native";

export default function TabLayout() {
  const { setColorScheme } = useColorScheme();
  setColorScheme("system");
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: getColorScheme,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <HeaderButton />
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="playlists"
        options={{
          title: 'Playlists',
          tabBarIcon: ({ color }) => <TabBarIcon name="music" color={color} />,
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: 'Account',
          tabBarIcon: ({ color }) => <TabBarIcon name="group" color={color} />,
        }}
      />
    </Tabs>
  );
}

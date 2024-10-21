import { Tabs } from "expo-router";

export default function()
{
    return (
        <Tabs>
            <Tabs.Screen name="home"></Tabs.Screen>
            <Tabs.Screen name="playlists"></Tabs.Screen>
            <Tabs.Screen name="account"></Tabs.Screen>
        </Tabs>
    );
}
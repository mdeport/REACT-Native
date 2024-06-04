import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: "Home", tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} /> }} />
      <Tabs.Screen name="nosactivite" options={{ title: "Nos Activités", tabBarIcon: ({ color }) => <FontAwesome size={28} name="heart" color={color} /> }} />
      <Tabs.Screen name="dons" options={{ title: "dons", tabBarIcon: ({ color }) => <FontAwesome size={28} name="money" color={color} /> }} />
      <Tabs.Screen name="mentionlegal" options={{ title: "Mention légal", tabBarIcon: ({ color }) => <FontAwesome size={28} name="legal" color={color} /> }} />
      <Tabs.Screen name="mesBonnesActions" options={{ title: " Mes bonnes actions", tabBarIcon: ({ color }) => <FontAwesome size={28} name="tasks" color={color} /> }} />
    </Tabs>
  );
}

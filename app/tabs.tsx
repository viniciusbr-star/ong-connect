import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import DashBoardScreen from "./screens/DashBoardScreen";
import ExplorarScreen from "./screens/ExplorarScreen";
import PerfilScreen from "./screens/PerfilScreen";
import { useLocalSearchParams } from "expo-router";

const Tab = createBottomTabNavigator();

export default function Tabs() {
  const { userName, voluntarioId } = useLocalSearchParams();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#0F172A",
          borderTopWidth: 0,
        },
        tabBarActiveTintColor: "#16a34a",
      }}
    >
      <Tab.Screen
        name="Dashboard"
        children={() => <DashBoardScreen />}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Explorar"
        children={() => <ExplorarScreen />}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Perfil"
        children={() => (
          <PerfilScreen
            userName={String(userName)}
            voluntarioId={String(voluntarioId)}
          />
        )}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
          
          tabBarStyle: {
            backgroundColor: "#0F172A",
            borderTopWidth: 0,
          },
        }}
      />
    </Tab.Navigator>
  );
}
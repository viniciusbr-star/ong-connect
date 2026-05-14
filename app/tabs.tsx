import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import DashBoardScreen from "./screens/DashBoardScreen";
import ExplorarScreen from "./screens/ExplorarScreen";
import PerfilScreen from "./screens/PerfilScreen";
import { useLocalSearchParams } from "expo-router";

const Tab = createBottomTabNavigator();

export default function Tabs() {
  const params = useLocalSearchParams(); // Captura userName e voluntarioId

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#0F172A",
          borderTopWidth: 0,
          height: 60,
        },
        tabBarActiveTintColor: "#16a34a",
        tabBarInactiveTintColor: "#94a3b8",
      }}
    >
      <Tab.Screen
        name="Dashboard"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      >
        {() => <DashBoardScreen />}
      </Tab.Screen>

      <Tab.Screen
        name="Explorar"
        component={ExplorarScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Perfil"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
        }}
      >
        {/* PARTE 4: Garantindo que o userName chegue ao Perfil */}
        {() => (
          <PerfilScreen
            userName={params.userName}
            voluntarioId={params.voluntarioId}
          />
        )}
      </Tab.Screen>
    </Tab.Navigator>
  );
}

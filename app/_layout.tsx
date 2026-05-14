import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false, 
      }}
    >
      <Stack.Screen name="index" /> 
      <Stack.Screen name="dashboard" />
      <Stack.Screen name="tabs" />
      <Stack.Screen name="explorar" />
      <Stack.Screen name="perfil" />
    </Stack>
  );
}

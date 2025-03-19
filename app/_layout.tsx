import { Stack } from "expo-router";
import './globals.css';


export default function RootLayout() {
  return (
  
  <Stack 
    screenOptions={{    
      headerShown: false, 
  }}>
    <Stack.Screen 
      name="index"
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen 
      name="register"
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen 
      name="login"
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen 
      name="forgotpassword"
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen 
      name="(tabs)"
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen 
      name="categories/[id]"
      options={{
        headerShown: false,
      }}
    />
  </Stack>
  )
}


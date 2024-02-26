import React from "react";
import SignInScreen from "./components/signInScreen";
import SignUpScreen from "./components/signUpScreen";
import Dashboard from "./components/dashboard";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Sign Up"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#6C63FF",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="Sign Up"
          component={SignUpScreen}
          options={{ title: "Sign Up" }}
        />
        <Stack.Screen
          name="Sign In"
          component={SignInScreen}
          options={{ title: "Sign In" }}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{title: "Dashboard"}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

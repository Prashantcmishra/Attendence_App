import React from "react";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AppNavigator from "../Attendence_App/src/navigation";

export default function App() {
  console.log("App is rendering ");
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AppNavigator /> {/* Changed from Navi to AppNavigator */}
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

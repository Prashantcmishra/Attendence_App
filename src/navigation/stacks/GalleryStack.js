// navigation/stacks/HomeStack.js
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import GalleryScreen from "../../screen/Gallery/GalleryScreen";

const Stack = createStackNavigator();

export default function GalleryStack() {
  console.log("Home Stack is renderinng ");
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeMain" component={GalleryScreen} />
      {/* <Stack.Screen name="SalesComparison" component={SalesComparison} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Notifications" component={NotificationScreen} /> */}
      {/* Add all future Home screens here */}
    </Stack.Navigator>
  );
}

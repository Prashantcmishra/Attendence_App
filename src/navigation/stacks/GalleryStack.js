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
    </Stack.Navigator>
  );
}

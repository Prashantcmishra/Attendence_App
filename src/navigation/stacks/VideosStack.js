// navigation/stacks/HomeStack.js
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import VideoScreen from "../../screen/VideoScreen/VideoScreen";

const Stack = createStackNavigator();

export default function VideosStack() {
  console.log("Home Stack is renderinng ");
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeMain" component={VideoScreen} />
    </Stack.Navigator>
  );
}

// navigation/stacks/HomeStack.js
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from "../../screen/Profile/ProfileScreen";

const Stack = createStackNavigator();

export default function ProfileStack() {
  console.log("Home Stack is renderinng ");
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="profilescreen" component={ProfileScreen} />
    </Stack.Navigator>
  );
}

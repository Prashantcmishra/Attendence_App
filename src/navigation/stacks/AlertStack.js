// navigation/stacks/HomeStack.js
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AlertScreen from "../../screen/Alert/AlertScreen";

const Stack = createStackNavigator();

export default function AlertStack() {
  console.log("Home Stack is renderinng ");
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Alertscreen" component={AlertScreen} />
    </Stack.Navigator>
  );
}

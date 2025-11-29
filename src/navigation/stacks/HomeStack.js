// navigation/stacks/HomeStack.js
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../../screen/Home/HomeScreen";
import FeaturedEvents from "../../screen/Home/FeaturedEvents";
import CheckWhatsLive from "../../screen/Home/CheckWhatsLive";
import UpcomingEvents from "../../screen/Home/UpcomingEvents";
import PastEvents from "../../screen/Home/PastEvents";
const Stack = createStackNavigator();

export default function HomeStack() {
  console.log("Home Stack is renderinng ");
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeMain" component={HomeScreen} />
      <Stack.Screen name="featuredevent" component={FeaturedEvents} />
      <Stack.Screen name="whatslive" component={CheckWhatsLive} />
      <Stack.Screen name="upcomingevents" component={UpcomingEvents} />
      <Stack.Screen name="pastevents" component={PastEvents} />
    </Stack.Navigator>
  );
}

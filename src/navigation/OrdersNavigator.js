import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OrdersList from "../screens/Orders/OrdersList";
import OrderDetails from "../screens/Orders/OrderDetails";

const Stack = createNativeStackNavigator();

export default function OrdersNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="OrdersList" component={OrdersList} />
      <Stack.Screen name="OrderDetails" component={OrderDetails} />
    </Stack.Navigator>
  );
}

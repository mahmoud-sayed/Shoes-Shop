import { NativeBaseProvider, Text, Box, StatusBar } from "native-base";
import PlaceOrderScreen from './src/Screens/PlaceOrderScreen/PlaceOrderScreen';
import OrderScreen from './src/Screens/OrderScreen/OrderScreen';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from './src/Screens/LoginScreen/LoginScreen';
import RegisterScree from './src/Screens/RegisterScreen/RegisterScree';
import BottomNav from "./src/Navigations/BottomNav";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <StatusBar hidden={true} />
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScree} />
          <Stack.Screen name="Order" component={OrderScreen} />
          <Stack.Screen name="Bottom" component={BottomNav} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

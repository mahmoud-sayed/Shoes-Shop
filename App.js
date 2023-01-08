import { NativeBaseProvider, Text, Box } from "native-base";
import HomeScreen from './src/Screens/HomeScreen/HomeScreen';
import LoginScreen from "./src/Screens/LoginScreen/LoginScreen";
import RegisterScree from "./src/Screens/RegisterScreen/RegisterScree";
import NotVerifyScreen from './src/Screens/NotVerifyScreen/NotVerifyScreen';
import SingleProductScreen from './src/Screens/SingleProductScreen/SingleProductScreen';
import CartScreen from './src/Screens/CartScreen/CartScreen';
import ProfileScreen from './src/Screens/ProfileScreen/ProfileScreen';

export default function App() {
  return (
    <NativeBaseProvider>

      <ProfileScreen />

    </NativeBaseProvider>
  );
}

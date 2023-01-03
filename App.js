import { NativeBaseProvider, Text, Box } from "native-base";
import HomeScreen from './src/Screens/HomeScreen/HomeScreen';
import LoginScreen from "./src/Screens/LoginScreen/LoginScreen";
import RegisterScree from "./src/Screens/RegisterScreen/RegisterScree";

export default function App() {
  return (
    <NativeBaseProvider>

      <LoginScreen />

    </NativeBaseProvider>
  );
}

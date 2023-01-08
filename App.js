import { NativeBaseProvider, Text, Box } from "native-base";
import PlaceOrderScreen from './src/Screens/PlaceOrderScreen/PlaceOrderScreen';

export default function App() {
  return (
    <NativeBaseProvider>

      <PlaceOrderScreen />

    </NativeBaseProvider>
  );
}

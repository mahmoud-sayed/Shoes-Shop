import { NativeBaseProvider, Text, Box } from "native-base";
import PlaceOrderScreen from './src/Screens/PlaceOrderScreen/PlaceOrderScreen';
import OrderScreen from './src/Screens/OrderScreen/OrderScreen';

export default function App() {
  return (
    <NativeBaseProvider>

      <OrderScreen />

    </NativeBaseProvider>
  );
}

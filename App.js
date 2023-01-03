import { NativeBaseProvider, Text, Box } from "native-base";
import HomeScreen from './src/Screens/HomeScreen/HomeScreen';

export default function App() {
  return (
    <NativeBaseProvider>
      <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
        <HomeScreen />
      </Box>
    </NativeBaseProvider>
  );
}

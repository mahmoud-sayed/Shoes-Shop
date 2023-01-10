import React from 'react';
import { Text } from 'native-base';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from '../Screens/LoginScreen/LoginScreen';
import RegisterScree from './../Screens/RegisterScreen/RegisterScree';
import OrderScreen from './../Screens/OrderScreen/OrderScreen';
import BottomNav from './BottomNav';
import HomeScreen from './../Screens/HomeScreen/HomeScreen';
import SingleProductScreen from './../Screens/SingleProductScreen/SingleProductScreen';
import ShoppingScreen from './../Screens/ShoppingScreen/ShoppingScreen';
import PaymentScreen from './../Screens/PaymentScreen/PaymentScreen';
import PlaceOrderScreen from './../Screens/PlaceOrderScreen/PlaceOrderScreen';
import CartScreen from './../Screens/CartScreen/CartScreen';


const Stack = createNativeStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Single" component={SingleProductScreen} />
      <Stack.Screen name="Shipping" component={ShoppingScreen} />
      <Stack.Screen name="CheckOut" component={PaymentScreen} />
      <Stack.Screen name="PlaceOrder" component={PlaceOrderScreen} />
      <Stack.Screen name="Cart" component={CartScreen} />
    </Stack.Navigator>
  );
};

export default StackNav;
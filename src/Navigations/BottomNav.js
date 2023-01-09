import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Center, Text } from 'native-base';
import React from 'react';
import Colors from '../GeneralImportantThings/colors';
import { Entypo, AntDesign, FontAwesome, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import HomeScreen from './../Screens/HomeScreen/HomeScreen';
import { StyleSheet } from 'react-native';
import ProfileScreen from './../Screens/ProfileScreen/ProfileScreen';
import CartScreen from './../Screens/CartScreen/CartScreen';

const Tab = createBottomTabNavigator();

const CustomTab = ({ children, onPress }) => (<Text>hh</Text>);

const BottomNav = () => {
  return (
    <Tab.Navigator
      backBehavior='main'
      initialRouteName='Main'
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: { ...style.tab },
        headerShown: false,
        tabBarHiddenOnKeyboard: true
      }}>
      {/* Home */}
      <Tab.Screen
        name='Main'
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Center>
              {focused ? (
                <Entypo name='home' size={24} color={Colors.main} />
              ) :
                <AntDesign name='home' size={24} color={Colors.black} />
              }
            </Center>
          )
        }}
      />
      {/* Cart */}
      <Tab.Screen
        name='cart'
        component={CartScreen}
        options={{
          tabBarButton: (props) => <CustomTab {...props} />,
          tabBarIcon: ({ focused }) => (
            <Center>
              {focused ? (
                <FontAwesome5 name='shopping-basket' size={24} color={Colors.main} />
              ) :
                <MaterialCommunityIcons name='shopping-outline' size={24} color={Colors.black} />
              }
            </Center>
          )
        }}
      />
      {/* Profile */}
      <Tab.Screen
        name='Profile'
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Center>
              {focused ? (
                <FontAwesome name='user' size={24} color={Colors.main} />
              ) :
                <AntDesign name='user' size={24} color={Colors.black} />
              }
            </Center>
          )
        }}
      />
    </Tab.Navigator >
  );
};

const style = StyleSheet.create({
  tab: {
    elevation: 0,
    backGroundColor: Colors.white,
    height: 60
  }
});

export default BottomNav;
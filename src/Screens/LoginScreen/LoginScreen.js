import React, { useState } from 'react';
import { View, Text, Box, Center, Heading, VStack, FormControl, Input, Link, Button, HStack } from 'native-base';
import { MaterialIcons } from "@expo/vector-icons";
import { Foundation } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';


import Colors from './../../GeneralImportantThings/colors';
import { StyleSheet } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [sowPass, setShowPass] = useState(false);


  return (
    <Box flex={1} width='100%' bg={Colors.main}>
      <Center w="100%" m='auto'>
        <Box safeArea p="2" py="8" w="100%" style={style.formBackGround}>
          <Heading alignSelf='center' size="lg" fontWeight="700" color="coolGray.800" _dark={{
            color: "warmGray.50"
          }}>
            Welcome Back
          </Heading>

          <VStack space={3} mt="5">
            <Input
              variant='underlined'
              placeholder='user@gmail.com'
              InputLeftElement={
                <MaterialIcons name='email' size={20} color={Colors.main} style={style.iconsStyle} />
              }
            />

            <Input
              type="password"
              placeholder='*************'
              variant='underlined'
              InputLeftElement={
                <Foundation name="key" size={24} color={Colors.main} style={style.iconsStyle}

                />
              }
              InputRightElement={
                sowPass === false ? <FontAwesome5 name="eye" size={24} color={Colors.main}
                  onPress={() => setShowPass(!sowPass)}
                /> :
                  <FontAwesome5 name="eye-slash" size={24} color={Colors.main}
                    onPress={() => setShowPass(!sowPass)}
                  />
              }
            />
            <Link _text={{
              fontSize: "xs",
              fontWeight: "500",
              color: Colors.main
            }} alignSelf="flex-end" mt="1">
              Forget Password?
            </Link>

            <Button backgroundColor={Colors.main} mt="2" colorScheme="indigo" onPress={() => navigation.navigate('Bottom')}>
              Sign in
            </Button>
            <HStack mt="6" justifyContent="center">
              <Text fontSize="sm" color="coolGray.600" _dark={{
                color: "warmGray.200"
              }}>
                I'm a new user.{" "}
              </Text>
              <Link _text={{
                color: Colors.main,
                fontWeight: "medium",
                fontSize: "sm"
              }} href="#" onPress={() => navigation.navigate('Register')}>
                Sign Up
              </Link>
            </HStack>
          </VStack>
        </Box>
      </Center >
    </Box >
  );
};

const style = StyleSheet.create({
  formBackGround: {
    backgroundColor: Colors.white,
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  iconsStyle: {
    marginRight: 10
  }
});

export default LoginScreen;
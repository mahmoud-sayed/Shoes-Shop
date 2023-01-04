import React from 'react';
import { View, Text, Box, Center, Image, VStack } from 'native-base';
import Colors from './../../GeneralImportantThings/colors';
import { StyleSheet } from 'react-native';
import ButtonComponent from './../../components/ButtonComponent/ButtonComponent';

const NotVerifyScreen = () => {
  return (
    <Box flex={1} backgroundColor={Colors.main} safeAreaTop>
      <Center w='full' h={250}>
        <Image
          source={require('./../../../assets/FavIcon.png')}
          alt='logo'
          size='lg'
          style={style.imageStyle}
        />
      </Center>
      <VStack space={6} px={5} alignItems='center'>
        <ButtonComponent bg={Colors.black} color={Colors.white}>
          REGISTER
        </ButtonComponent>
        <ButtonComponent bg={Colors.white} color={Colors.black}>
          LOGIN
        </ButtonComponent>
      </VStack>
    </Box>
  );
};

const style = StyleSheet.create({
  imageStyle: {
    borderRadius: 50
  }
});

export default NotVerifyScreen;
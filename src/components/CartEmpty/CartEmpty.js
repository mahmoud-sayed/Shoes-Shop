import React from 'react';
import { Text, Box, Center } from 'native-base';
import Colors from './../../GeneralImportantThings/colors';
import { FontAwesome } from '@expo/vector-icons';
import ButtonComponent from '../ButtonComponent/ButtonComponent';

const CartEmpty = () => {
  return (
    <Box flex={1} px={4} pb={50}>
      <Center height='90%'>
        <Center w={200} h={200} bgColor={Colors.white} rounded='full'>
          <FontAwesome name='shopping-basket' size={64} color={Colors.main} />
        </Center>
        <Text color={Colors.main} bold mt={5} fontSize={20}> Cart Is Empty</Text>
      </Center>
      <ButtonComponent bg={Colors.black} color={Colors.white} >START SHOPPING</ButtonComponent>
    </Box>
  );
};

export default CartEmpty;
import React from 'react';
import { View, Text, Box, Center, ScrollView, Pressable, HStack, Image, Button } from 'native-base';
import Colors from './../../GeneralImportantThings/colors';

import CartItems from '../../components/CartItems/CartItems';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';



const CartScreen = () => {
  return (
    <Box flex={1} safeAreaTop bg={Colors.deepGray}>
      {/*Header */}
      <Center w='full' py={5}>
        <Text color={Colors.black} fontSize={20} bold>
          Cart
        </Text>
      </Center>
      {/*
      if cart is empty
      <CartEmpty />
      */}
      <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
        <CartItems />
        {/* Total */}
        <Center>
          <HStack
            rounded={50}
            bgColor={Colors.white}
            w='90%'
            justifyContent='space-between'
            alignItems='center'
            shadow={2}
            pl={5}
            h={45}
          >
            <Text>Total</Text>
            <Button px={10} h={45} rounded={50} bg={Colors.main} _text={{ color: Colors.white, fontWeight: 'semibold' }} _pressed={{ bg: Colors.main }}>$365</Button>
          </HStack>
        </Center>
        {/* CheckOut */}
        <ButtonComponent bg={Colors.black} color={Colors.white} mt={10}>Check Out</ButtonComponent>
      </ScrollView>
    </Box>
  );
};

export default CartScreen;